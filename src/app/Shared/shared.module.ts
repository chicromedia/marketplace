import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/btn-primary/button-primary.component';
import { RouterModule } from "@angular/router";
import { CarouselComponent } from './components/carrousel/carousel.component';
import { ImagesAsyncPipe } from './pipes/imagesAsync.pipe';
import { YesOrNoPipe } from './pipes/yes-or-no.pipe';
import { NavTapsComponent } from './components/nav-taps/nav-taps.component';
import { NavTapItemDirective } from './directives/nav-tap-item.directive';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AgmCoreModule } from "@agm/core";


@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule
  ],
  declarations: [
    ButtonPrimaryComponent,
    CarouselComponent,
    ImagesAsyncPipe,
    YesOrNoPipe,
    NavTapsComponent,
    NavTapItemDirective,
    GoogleMapComponent
  ],
    exports: [
        RouterModule,
        ButtonPrimaryComponent,
        CarouselComponent,
        ImagesAsyncPipe,
        YesOrNoPipe,
        NavTapsComponent,
        NavTapItemDirective,
        GoogleMapComponent
    ]
} )
export class SharedModule
{
}
