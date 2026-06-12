import { Component, inject } from '@angular/core';
import { ANGULAR_CLI_VERSION, APP_NAME, APP_VERSION } from '../app-json-data';
import { environment } from '../../environments/environment';
import { ReplaceDashesPipe } from '../shared/pipes/replace-dashes.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [ReplaceDashesPipe, TitleCasePipe],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  projectName = inject(APP_NAME);
  version = inject(APP_VERSION);
  angularCLIVersion = inject(ANGULAR_CLI_VERSION);
  apiURL = environment.apiUrl;
  env = environment.env;
}
