import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-deletion-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './deletion-dialog.html',
  styleUrl: './deletion-dialog.scss'
})
export class DeletionDialog {

  private readonly dialogRef = inject(MatDialogRef<DeletionDialog>);

  public confirm(): void {
    this.dialogRef.close(true);
  }

  public dismiss(): void {
    this.dialogRef.close(false);
  }

}
