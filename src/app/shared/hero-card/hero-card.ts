import { Component, input, output } from '@angular/core';
import { Hero } from '../../../types/hero';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    TitleCasePipe,
    MatIconModule,
  ],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.scss'
})
export class HeroCard {

  public readonly hero = input.required<Hero>()
  public onEdit = output<Hero>();
  public onDelete = output<number>();

  public onDeleteClick(): void {

  }

  public onEditClick(): void {

  }

}
