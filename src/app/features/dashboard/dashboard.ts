import { Component, inject, signal } from '@angular/core';
import { HeroList } from '../hero-list/hero-list';
import { HeroesService } from '../../services/heroes';
import { Heading } from '../../shared/heading/heading';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeroList,
    Heading,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  public title = signal<string>('Héroes más allá de la imaginación');
  public subtitle = signal<string>(`Desde tiempos inmemoriales, la humanidad ha soñado con figuras extraordinarias capaces de desafiar los límities
    de la realidad.`);

}
