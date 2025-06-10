import { Component, inject, signal } from '@angular/core';
import { HeroList } from '../hero-list/hero-list';
import { HeroesService } from '../../services/heroes';
import { Heading } from '../../shared/heading/heading';
import { SearchBar } from '../../shared/search/search-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeroList,
    Heading,
    MatIconModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  public title = signal<string>('Héroes más allá de la imaginación');
  public subtitle = signal<string>(`Desde tiempos inmemoriales, la humanidad ha soñado con figuras extraordinarias capaces de desafiar los límities
    de la realidad.`);

}
