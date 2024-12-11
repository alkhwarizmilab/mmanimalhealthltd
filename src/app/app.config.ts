import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {provideHttpClient} from "@angular/common/http";
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withViewTransitions()),
    provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({
      "projectId": "mmanimalhealthltd",
      "appId": "1:728464196232:web:9e3355e1ff2418301ad53d",
      "storageBucket": "mmanimalhealthltd.firebasestorage.app",
      "apiKey": "AIzaSyDtVCVoNpVmLe0qbW-O3a8OZeEZ2V8p1Ec",
      "authDomain": "mmanimalhealthltd.firebaseapp.com",
      "messagingSenderId": "728464196232"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideClientHydration(),
  ]
};
