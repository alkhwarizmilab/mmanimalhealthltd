import {APP_BASE_HREF} from '@angular/common';
import {CommonEngine} from '@angular/ssr';
import express from 'express';
import {fileURLToPath} from 'node:url';
import {dirname, join, resolve} from 'node:path';
import bootstrap from './src/main.server';
import {JSONFile} from "lowdb/node";
import {Low} from "lowdb";
import multer from 'multer';
import {randomUUID} from "node:crypto";
import fs from 'fs';
import cors from 'cors';


function deleteFile(filePath: string): void {
  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File does not exist: ${filePath}`);
      return;
    }

    // Delete the file if it exists
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file: ${filePath}`);
        return;
      }
      console.log(`File deleted successfully: ${filePath}`);
    });
  });
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();
  const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        const uploadPath = './images';
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

  server.use('.images/', express.static('./images'));
  server.use(cors());

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.use(express.json());
  const adapter = new JSONFile('db.json');
  const db: Low<any> = new Low(adapter, {products: []});

  server.get('/api/products', async (req, res) => {
    await db.read();
    db.data ||= {products: []};
    res.json(db.data.products);
  });

  server.post(
    '/api/products',
    upload.single('image'),
    async (req: any, res: any) => {
      await db.read();
      db.data ||= {products: []};
      let product = JSON.parse(req.body.product);
      product.imageUrl = req.file ? req.file.path : product.imageUrl;
      product.id = randomUUID();
      db.data.products.push(product);
      await db.write();
      res.json(product);
    }
  );

  server.put(
    '/api/products/:id',
    upload.single('image'),
    async (req: any, res: any) => {
      await db.read();
      db.data ||= {products: []};

      const productId = req.params.id;
      let dbProduct = db.data.products.find(p => p.id === productId);

      let product = JSON.parse(req.body.product);

      if (req.file) {
        deleteFile(dbProduct.imageUrl);
        product.imageUrl = req.file.path;
      }

      if (dbProduct.imageUrl && !product.imageUrl) {
        deleteFile(dbProduct.imageUrl);
      }

      product.id = dbProduct.id;
      Object.assign(dbProduct, product);
      await db.write();
      res.json(product);
    }
  );

  server.delete('/api/products/:id', async (req: any, res: any) => {
    await db.read();
    db.data ||= { products: [] };

    const productId = req.params.id;

    // Find the product by id
    const productIndex = db.data.products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Delete the product by index
    db.data.products.splice(productIndex, 1); // Removes the product from the array

    // Write the changes to the database
    await db.write();

    res.status(200).json({ message: 'Product deleted successfully' });
  });


  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const {protocol, originalUrl, baseUrl, headers} = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{provide: APP_BASE_HREF, useValue: baseUrl}],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
