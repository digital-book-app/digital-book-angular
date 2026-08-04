import { Component } from '@angular/core';
import { TITLE as PROJECT_TITLE } from '../app.const';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  host: {
    class: 'flex h-full',
  },
})
export class SideNavComponent {
  projectTitle = PROJECT_TITLE;

}
