import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../../types/hero';
import { MatIconModule } from '@angular/material/icon';
import { HeroesService } from '../../services/heroes';
import { delay } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeroCard } from '../hero-card/hero-card';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-hero-list',
  imports: [
    HeroCard,
    MatIconModule,
    SearchBar,
  ],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.scss'
})
export class HeroList implements OnInit {

  protected heroes = signal<Hero[]>([]);
  private readonly heroesService = inject(HeroesService);
  private readonly destroy = inject(DestroyRef);

  ngOnInit(): void {
    this.listenToHeroes();
  }

  private listenToHeroes(): void {
    this.heroesService.heroesObservable()
      .pipe(delay(0))
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(heroes =>
        this.heroes.set(heroes)
      );
  }

  protected filterHeroes(name: string): void {
    this.heroesService.filter({ name: name })
  }

}
