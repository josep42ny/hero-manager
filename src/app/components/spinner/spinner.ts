import { Component, inject, signal } from '@angular/core';
import { LoadingService } from '../../services/loading-service';
import { delay } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  imports: [
    MatProgressSpinnerModule,
  ],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
  standalone: true,
})
export class Spinner {

  public loading = signal<boolean>(false);
  private readonly loadingService = inject(LoadingService);

  constructor() {
    this.listenToLoading();
  }

  private listenToLoading(): void {
    this.loadingService.isLoading()
      .pipe(delay(0))
      .subscribe(load =>
        this.loading.set(load)
      );
  }


}
