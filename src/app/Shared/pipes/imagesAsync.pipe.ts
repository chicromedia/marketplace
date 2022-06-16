import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from "rxjs";
import { ImagesService } from "../services/images.service";
import { Image } from "../interface/image";

@Pipe( {
  name: 'imagesAsync',
  pure: false
} )
export class ImagesAsyncPipe implements PipeTransform, OnDestroy
{

  private currentId?: string | null;
  private lastValue: Image[] = [];
  private subscription?: Subscription;

  constructor( private service: ImagesService, private ref: ChangeDetectorRef )
  {
  }

  transform( propertyId: string ): Image[]
  {
    if ( this.currentId !== propertyId )
    {
      this.currentId = propertyId;
      this.subscription = this.service.getAllById( propertyId ).subscribe( images =>
      {
        this.lastValue = images;
        this.ref.detectChanges();
      } );
    }
    return this.lastValue;
  }

  ngOnDestroy()
  {
    this.subscription!.unsubscribe();
  }
}
