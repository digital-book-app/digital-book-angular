import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarData } from '../../models/snack-bar-data.model';
import { MatIcon } from '@angular/material/icon';

// TODO: extend with icon/color variants (info, warning, success) for reuse beyond errors
@Component({
  selector: 'app-snack-bar',
  imports: [MatIcon],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
  host: {
    class: 'flex gap-x-2 items-center',
  },
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {}

  onClose() {
    this.data.matSnackBar.dismiss();
  }
}
