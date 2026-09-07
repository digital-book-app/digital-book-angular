import { MatSnackBar } from '@angular/material/snack-bar';

export interface SnackBarData {
  message: string;
  icon: string;
  matSnackBar: MatSnackBar;
}

export enum SnackBarPanelClass {
  INFO = 'info',
  WARNING = 'warning',
  SUCCESS = 'success',
  ERROR = 'error',
}
