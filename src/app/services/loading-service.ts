import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public on(): void {
    this.loading.next(true);
  }

  public off(): void {
    this.loading.next(false);
  }

}
