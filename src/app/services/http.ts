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

  public deleteHero(heroId: number): Observable<void> {
    return this.http.delete<void>(`api/hero/${heroId}`);
  }

  public updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`api/hero/${hero.id}`, hero);
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`api/hero`, hero);
  }

}
