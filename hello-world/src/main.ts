import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import amplifyconfig from './amplifyconfiguration1.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(amplifyconfig);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
