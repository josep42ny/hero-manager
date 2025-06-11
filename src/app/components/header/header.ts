import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  public readonly IMAGE = "https://dstatic.w2m.com/assets/w2m-travel/dist/logo/logo.svg"
}
