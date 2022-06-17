import { Component, Input, OnInit } from '@angular/core';
import { Image } from "../../interface/image";

@Component( {
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ]
} )
export class CarouselComponent implements OnInit
{

  @Input()
  images: Image[] = [];

  selected: number = 0;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  prev()
  {
    if ( this.selected !== 0 )
    {
      this.selected--;
    }
  }

  next()
  {
    if ( this.selected < this.images.length - 1 )
    {
      this.selected++;
    }
  }
}
