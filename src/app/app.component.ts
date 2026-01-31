import {Component, inject} from '@angular/core';
import {environment} from '../environments/environment';
import {ReplaceDashesPipe} from './shared/pipes/replace-dashes.pipe';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {APP_NAME, APP_VERSION} from './app-json-data';

@Component({
  selector: 'app-root',
  imports: [
    ReplaceDashesPipe,
    TitleCasePipe,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  projectName = inject(APP_NAME);
  version = inject(APP_VERSION);
  apiURL = environment.apiUrl;
  env = environment.env;
}
