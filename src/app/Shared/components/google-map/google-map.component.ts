import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from "../../interface/location";

@Component( {
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: [ './google-map.component.scss' ]
} )
export class GoogleMapComponent implements OnInit
{

  @Input()
  public type: 'roadmap' | 'hybrid' | 'satellite' | 'terrain' = 'hybrid';
  @Input()
  location!: ILocation;
  @Input()
  size: number = 30;
  @Input()
  zoom: number = 8;
  @Input()
  rounded: boolean = false;

  public latitude!: number;
  public longitude!: number;

  constructor()
  {
  }

  ngOnInit(): void
  {
    if ( navigator.geolocation )
    {
      navigator.geolocation.getCurrentPosition( ( { coords }: GeolocationPosition ) =>
      {
        this.latitude = coords.latitude;
        this.longitude = coords.longitude;
      } );
    }
  }

}
