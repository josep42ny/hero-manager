import { Component } from '@angular/core';
import { HeroList } from '../hero-list/hero-list';

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
