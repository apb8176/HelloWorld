import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import amplifyconfig from '../amplifyconfiguration1.json';
import { Amplify } from 'aws-amplify';
Amplify.configure(amplifyconfig);
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
