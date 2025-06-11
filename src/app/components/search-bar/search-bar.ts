import { Component, DestroyRef, inject, input, OnInit, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';

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
export class SearchBar implements OnInit {

  public onSearch = output<string>();
  public form: FormGroup = new FormBuilder().group({ query: '' });
  private readonly MS_BETWEEN_KEYPRESSES: number = 300;
  private intputValue = new Subject<string>();
  private destroyed = inject(DestroyRef);
  private changeTrigger: Observable<string> = this.intputValue.pipe(
    debounceTime(this.MS_BETWEEN_KEYPRESSES),
    distinctUntilChanged(),
  );

  ngOnInit(): void {
    this.changeTrigger
      .pipe(takeUntilDestroyed(this.destroyed))
      .subscribe((value: string) => {
        this.onSearch.emit(value);
      });
  }

  public onInput() {
    this.intputValue.next(this.form.value.query);
  }

  public submit(): void {
    this.onSearch.emit(this.form.value.query);
  }

}
