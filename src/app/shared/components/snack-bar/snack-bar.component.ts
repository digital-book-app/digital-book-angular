import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarData } from '../../models/snack-bar-data.model';
import { MatIcon } from '@angular/material/icon';

/**
 * Custom content for `MatSnackBar.openFromComponent()`.
 *
 * **Styling variants**
 * Pass a `SnackBarPanelClass` value as the `panelClass` option to color the
 * snack bar (info, warning, success, error). Each value maps to a mixin/token
 * override defined in `_snack-bar.scss`.
 * ```typescript
 * this.matSnackBar.openFromComponent(SnackBarComponent, {
 *   data: snackData,
 *   panelClass: SnackBarPanelClass.ERROR,
 * });
 * ```
 *
 * **Data**
 * Provide a `SnackBarData` object via the `data` option:
 * - `message`: text shown in the snack bar body.
 * - `icon`: `mat-icon` name shown next to the message.
 * - `matSnackBar`: the `MatSnackBar` instance, used internally by `onClose()` to dismiss the snack bar.
 * ```typescript
 * const snackData: SnackBarData = {
 *   message: `There has been an error \n ${err.error.message}`,
 *   icon: 'error',
 *   matSnackBar: this.matSnackBar,
 * };
 * ```
 */
@Component({
  selector: 'app-snack-bar',
  imports: [MatIcon],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
  host: {
    class: 'flex items-start gap-4',
  },
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {}

  onClose() {
    this.data.matSnackBar.dismiss();
  }
}
