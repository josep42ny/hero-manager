import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../../types/hero';
import { MatIconModule } from '@angular/material/icon';
import { HeroesService } from '../../services/heroes-service';
import { delay, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeroCard } from '../hero-card/hero-card';
import { SearchBar } from '../search-bar/search-bar';
import { HttpParams } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-list',
  imports: [
    HeroCard,
    MatIconModule,
    SearchBar,
    AsyncPipe,
  ],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.scss'
})
export class HeroList implements OnInit {

  public heroes: Observable<Hero[]> = new Observable();
  private readonly heroesService = inject(HeroesService);

  ngOnInit(): void {
    this.heroes = this.heroesService.heroesObservable();
  }

  public filterHeroes(name: string): void {
    this.heroesService.updateHeroes(name);
  }

}
