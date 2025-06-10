import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { Spinner } from './components/spinner/spinner';

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
