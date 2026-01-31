import {InjectionToken, type Provider} from '@angular/core';

export const APP_NAME = new InjectionToken<string>('APP_NAME');
export const APP_VERSION = new InjectionToken<string>('APP_VERSION');
export const ANGULAR_CLI_VERSION = new InjectionToken<string>('ANGULAR_CLI_VERSION');

export function provideAppName(name: string): Provider {
  return {provide: APP_NAME, useValue: name};
}

export function provideAppVersion(version: string): Provider {
  return {provide: APP_VERSION, useValue: version};
}

export function provideAngularCLIVersion(version: string): Provider {
  return {provide: ANGULAR_CLI_VERSION, useValue: version};
}