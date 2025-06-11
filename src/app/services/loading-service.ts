import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isLoading(): Observable<boolean> {
    return this.loading.asObservable()
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
      );
  }

  public on(): void {
    this.loading.next(true);
  }

  public off(): void {
    this.loading.next(false);
  }

}
