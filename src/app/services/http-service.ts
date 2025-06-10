import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';
import { HeroOptions } from '../../types/heroOptions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public readonly http = inject(HttpClient);

  public getHeroes(params?: HttpParams): Observable<Hero[]> {
    return this.http.get<Hero[]>(`api/hero${params}`);
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
