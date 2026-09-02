import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { routes } from './app.routes';
import {
  provideAngularCLIVersion,
  provideAppName,
  provideAppVersion,
} from './app-json-data';
import { version, name, devDependencies } from '../../package.json';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppName(name),
    provideAppVersion(version),
    provideAngularCLIVersion(devDependencies['@angular/cli']),
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 6000,
        horizontalPosition: 'end',
      },
    },
  ],
};
