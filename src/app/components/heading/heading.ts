import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.scss'
})
export class Heading {

  public title = input.required<string>();
  public subtitle = input<string>('');

}
