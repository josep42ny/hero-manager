import { Component, inject, signal } from '@angular/core';
import { LoadingService } from '../../services/loading-service';
import { delay, Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-spinner',
  imports: [
    MatProgressSpinnerModule,
    AsyncPipe,
  ],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
  standalone: true,
})
export class Spinner {

  public loading: Observable<boolean> = inject(LoadingService).isLoading();

}
