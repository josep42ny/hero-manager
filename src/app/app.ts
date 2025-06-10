import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Spinner } from './components/spinner/spinner';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    Spinner,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
