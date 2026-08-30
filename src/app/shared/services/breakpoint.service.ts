import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

export type BreakpointName = 'tiny' | 'small' | 'medium' | 'large' | 'mega';

// Mirrors $breakpoints in _variables.scss, used only as a fallback if the CSS variable isn't readable yet.
const BREAKPOINT_FALLBACKS_EM: Record<BreakpointName, string> = {
  tiny: '30em',
  small: '37.5em',
  medium: '50em',
  large: '75em',
  mega: '93.75em',
};

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private readonly document = inject(DOCUMENT);
  private readonly breakpointObserver = inject(BreakpointObserver);

  isBelowBreakpoint(name: BreakpointName) {
    return toSignal(
      this.breakpointObserver
        .observe(`(max-width: ${this.getBreakpointValue(name)})`)
        .pipe(map(({ matches }) => matches)),
      { initialValue: false },
    );
  }

  private getBreakpointValue(name: BreakpointName): string {
    const value = getComputedStyle(this.document.documentElement)
      .getPropertyValue(`--breakpoint-${name}`)
      .trim();
    return value || BREAKPOINT_FALLBACKS_EM[name];
  }
}
