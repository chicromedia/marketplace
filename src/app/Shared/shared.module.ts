import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/btn-primary/button-primary.component';
import { RouterModule } from "@angular/router";
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ImagesAsyncPipe } from './pipes/imagesAsync.pipe';
import { YesOrNoPipe } from './pipes/yes-or-no.pipe';


@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ButtonPrimaryComponent,
    CarrouselComponent,
    ImagesAsyncPipe,
    YesOrNoPipe
  ],
  exports: [
    RouterModule,
    ButtonPrimaryComponent,
    CarrouselComponent,
    ImagesAsyncPipe,
    YesOrNoPipe
  ]
} )
export class SharedModule
{
}
