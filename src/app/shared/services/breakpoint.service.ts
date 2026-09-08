import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

export enum BreakpointCategory {
  TINY = 'tiny',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  MEGA = 'mega',
}

const BREAKPOINT_FALLBACKS: Record<BreakpointCategory, string> = {
  [BreakpointCategory.TINY]: '30em',
  [BreakpointCategory.SMALL]: '37.5em',
  [BreakpointCategory.MEDIUM]: '50em',
  [BreakpointCategory.LARGE]: '75em',
  [BreakpointCategory.MEGA]: '93.75em',
};

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private readonly document = inject(DOCUMENT);
  private readonly breakpointObserver = inject(BreakpointObserver);

  isBelowBreakpoint(name: BreakpointCategory) {
    return toSignal(
      this.breakpointObserver
        .observe(`(max-width: ${this.getBreakpointValue(name)})`)
        .pipe(map(({ matches }) => matches)),
      { initialValue: false },
    );
  }

  private getBreakpointValue(name: BreakpointCategory): string {
    const value = getComputedStyle(this.document.documentElement)
      .getPropertyValue(`--breakpoint-${name}`)
      .trim();
    return value || BREAKPOINT_FALLBACKS[name];
  }
}
