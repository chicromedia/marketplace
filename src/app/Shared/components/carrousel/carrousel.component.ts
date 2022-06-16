import { Component, Input, OnInit } from '@angular/core';
import { Image } from "../../interface/image";

@Component( {
  selector: 'carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: [ './carrousel.component.scss' ]
} )
export class CarrouselComponent implements OnInit
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
    if ( this.selected > this.images.length + 1 )
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
