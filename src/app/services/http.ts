import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';

@Injectable({
  providedIn: 'root'
})
export class Http {

  public readonly http = inject(HttpClient);

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`api/hero`);
  }

}
