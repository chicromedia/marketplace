import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/btn-primary/button-primary.component';
import { RouterModule } from "@angular/router";
import { CarrouselComponent } from './components/carrousel/carrousel.component';
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
    CarrouselComponent,
    ImagesAsyncPipe,
    YesOrNoPipe,
    NavTapsComponent,
    NavTapItemDirective,
    GoogleMapComponent
  ],
    exports: [
        RouterModule,
        ButtonPrimaryComponent,
        CarrouselComponent,
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
