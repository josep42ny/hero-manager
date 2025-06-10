import { Component, inject } from '@angular/core';
import { HeroList } from '../hero-list/hero-list';
import { HeroesService } from '../../services/heroes';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeroList,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
