import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Hero } from '../../../types/hero';

@Component({
  selector: 'app-add-edit-dialog',
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './add-edit-dialog.html',
  styleUrl: './add-edit-dialog.scss'
})
export class AddEditDialog {

  public form: FormGroup;
  public isEditing = computed<boolean>(() => !!this.data);
  private readonly URL_REGEX: RegExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  private readonly dialogRef = inject(MatDialogRef<AddEditDialog>);
  private readonly formBuilder = inject(FormBuilder);
  private readonly data = inject<Hero | null>(MAT_DIALOG_DATA);

  constructor() {
    this.form = this.formBuilder.nonNullable.group({
      id: [this.data?.id, Validators.required],
      name: [this.data?.name, Validators.required],
      description: [this.data?.description, Validators.required],
      location: [this.data?.location, Validators.required],
      powers: [this.data?.powers, Validators.required],
      imageUrl: [this.data?.imageUrl, [Validators.required, Validators.pattern(this.URL_REGEX)]],
      terms: [false, Validators.requiredTrue],
    });
  }

  protected submit(): void {
    const result: any = this.form.value;
    if (!this.isEditing()) {
      delete result.id;
    }
    delete result.terms;
    this.dialogRef.close(result as Hero);
  }

}
