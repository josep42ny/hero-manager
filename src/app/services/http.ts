import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';
import { HeroOptions } from '../../types/heroOptions';

@Injectable({
  providedIn: 'root'
})
export class Http {

  public readonly http = inject(HttpClient);

  public getHeroes(filter?: HeroOptions): Observable<Hero[]> {
    return this.http.get<Hero[]>(`api/hero${filter?.name ? '?name_like=' + filter.name : ''}`);
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
