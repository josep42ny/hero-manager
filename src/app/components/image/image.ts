import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.html',
  styleUrl: './image.scss'
})
export class Image {

  public src = input.required<string>();
  public alt = input<string>();

}
