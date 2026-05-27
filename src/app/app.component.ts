import {Component, inject, signal} from '@angular/core';
import {environment} from '../environments/environment';
import {ReplaceDashesPipe} from './shared/pipes/replace-dashes.pipe';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {ANGULAR_CLI_VERSION, APP_NAME, APP_VERSION} from './app-json-data';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { TITLE } from './app.const';

@Component({
  selector: 'app-root',
  imports: [
    ReplaceDashesPipe,
    TitleCasePipe,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    class: 'flex h-screen'
  }
})
export class AppComponent {

  isSideNavOpen = signal(false);
  title = TITLE;
  
  projectName = inject(APP_NAME);
  version = inject(APP_VERSION);
  angularCLIVersion = inject(ANGULAR_CLI_VERSION);
  apiURL = environment.apiUrl;
  env = environment.env;
}
