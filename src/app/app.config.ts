import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAppName, provideAppVersion} from './app-json-data';
import {version, name} from '../../package.json';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAppName(name),
    provideAppVersion(version)
  ]
};
