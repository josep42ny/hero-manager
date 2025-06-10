import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading-service';

export const httpInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const loadingService = inject(LoadingService);

  loadingService.on();

  return next(request)
    .pipe(finalize(() => {
      loadingService.off();
    }));
};