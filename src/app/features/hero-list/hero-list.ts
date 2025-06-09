import { Component, inject, signal } from '@angular/core';
import { Hero } from '../../../types/hero';
import { Http } from '../../services/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeroCard } from '../../shared/hero-card/hero-card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-list',
  imports: [
    HeroCard,
    MatIconModule,
  ],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.scss'
})
export class HeroList {

  public readonly http = inject(Http)
  protected heroes = signal<Hero[]>([]);

  constructor() {
    this.http.getHeroes()
      .pipe(takeUntilDestroyed())
      .subscribe((heroes) => {
        this.heroes.set(heroes);
      });
  }

  protected openDeleteDialog(heroId: number) {

  }

  protected openEditDialog(hero: Hero) {

  }

}
