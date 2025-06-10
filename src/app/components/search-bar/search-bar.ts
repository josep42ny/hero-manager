import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {

  public onSearch = output<string>();
  public form: FormGroup;
  private readonly formBuilder: FormBuilder = new FormBuilder();

  constructor() {
    this.form = this.formBuilder.group({ query: '' });
  }

  protected submit(): void {
    this.onSearch.emit(this.form.value.query);
  }

}
