import express from 'express';
import { JSONFile } from 'lowdb/node';
import { Low } from 'lowdb';
import multer from 'multer';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL || '';

function deleteFile(fileUrl) {
  const baseUrl = `${API_BASE_URL}/`;
  const filePath = fileUrl.replace(new RegExp(`^${baseUrl}`), '');

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File does not exist: ${filePath}`);
      return;
    }
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file: ${filePath}`);
        return;
      }
      console.log(`File deleted successfully: ${filePath}`);
    });
  });
}

export function app() {
  const app = express();

  const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        const uploadPath = './uploads';
        cb(null, uploadPath); // Save files in the 'uploads' folder
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}-${file.originalname}`); // Unique file name
      },
    }),
    limits: {
      fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
    },
  });
  app.use(cors());
  app.use(express.static('./files'));
  const staticFilesPath = path.resolve(process.env.STATIC_FOLDER);
  app.set('view engine', 'html');
  app.set('views', staticFilesPath);

  app.get('**', express.static(staticFilesPath, {
    maxAge: '1y',
    index: 'index.html',
  }));
  app.use((err, req, res, next) => {
    console.error(err.stack); // Log error stack for debugging

    // Serve the 404.html file for any errors
    res.status(err.status || 404).sendFile(path.resolve(staticFilesPath+'/index.html'));
  });

  app.use('/api', express.json()); // Middleware for JSON parsing
  const adapter = new JSONFile(process.env.DB_PATH);
  const db = new Low(adapter, { products: [] });

  app.get('/api/products', async (req, res) => {
    await db.read();
    db.data ||= { products: [] };

    const { category } = req.query; // Get the category from the query string
    let products = db.data.products;

    if (category) {
      products = products.filter(product => product.category === category);
    }

    res.json(products);
  });

  app.post('/api/products', upload.single('image'), async (req, res) => {
    await db.read();
    db.data ||= { products: [] };

    let product = JSON.parse(req.body.product);
    product.imageUrl = req.file ? `${API_BASE_URL}/${req.file.path}` : product.imageUrl;
    console.log(req.file);
    product.id = randomUUID();
    db.data.products.push(product);
    await db.write();
    res.json(product);
  });

  app.put('/api/products/:id', upload.single('image'), async (req, res) => {
    await db.read();
    db.data ||= { products: [] };

    const productId = req.params.id;
    let dbProduct = db.data.products.find(p => p.id === productId);
    let product = JSON.parse(req.body.product);

    if (req.file) {
      deleteFile(dbProduct.imageUrl);
      product.imageUrl = `${API_BASE_URL}/${req.file.path}`;
    }

    if (dbProduct.imageUrl && !product.imageUrl) {
      deleteFile(dbProduct.imageUrl);
    }

    product.id = dbProduct.id;
    Object.assign(dbProduct, product);
    await db.write();
    res.json(product);
  });

  app.delete('/api/products/:id', async (req, res) => {
    await db.read();
    db.data ||= { products: [] };

    const productId = req.params.id;
    const productIndex = db.data.products.findIndex(p => p.id === productId);

    deleteFile(db.data.products[productIndex].imageUrl);

    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    db.data.products.splice(productIndex, 1); // Removes the product from the array
    await db.write();
    res.status(200).json({ message: 'Product deleted successfully' });
  });

  return app;
}

export function run() {
  const port = process.env['PORT'] || 4444;
  console.log(port);
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
