import { Component, inject, input, output } from '@angular/core';
import { Hero } from '../../../types/hero';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage, provideImgixLoader, TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeroesService } from '../../services/heroes-service';

@Component({
  selector: 'app-hero-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    TitleCasePipe,
    MatIconModule,
    NgOptimizedImage,
  ],
  providers: [provideImgixLoader('https://picsum.dev/'),],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.scss'
})
export class HeroCard {

  public readonly heroesService: HeroesService = inject(HeroesService);
  public readonly hero = input.required<Hero>()
  public onEdit = output<Hero>();
  public onDelete = output<number>();

  public onDeleteClick(): void {
    this.heroesService.handleDelete(this.hero().id);
  }

  public onEditClick(): void {
    this.heroesService.handleAddEdit(this.hero());
  }

}
