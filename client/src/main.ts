import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ApplicationList } from './app/application-list/application-list';

bootstrapApplication(ApplicationList, appConfig)
  .catch((err) => console.error(err));
