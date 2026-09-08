import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { IconService } from './shared/services/icon.service';
import {
  BreakpointService,
  BreakpointCategory,
} from './shared/services/breakpoint.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    SideNavComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    class: 'flex h-screen',
  },
})
export class AppComponent {
  readonly title = inject(Title);
  private readonly breakpointService = inject(BreakpointService);

  private readonly isBelowResponsiveBreakpoint =
    this.breakpointService.isBelowBreakpoint(BreakpointCategory.MEDIUM);

  sideNavMode = computed<MatDrawerMode>(() =>
    this.isBelowResponsiveBreakpoint() ? 'over' : 'side',
  );
  isSideNavOpen = computed(() => !this.isBelowResponsiveBreakpoint());

  iconService = inject(IconService);

  constructor() {
    this.iconService.registerIconList();
  }
}
