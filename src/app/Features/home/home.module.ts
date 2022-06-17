import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { HomeState } from "./store/home-state";
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { GotoPropertyGuard } from "./guards/goto-property.guard";
import { AgmCoreModule } from "@agm/core";


const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'property/:id',
    component: HomeComponent,
    canActivate: [ GotoPropertyGuard ]
  }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( HOME_ROUTES ),
    NgxsModule.forFeature( [ HomeState ] ),
    SharedModule,
    AgmCoreModule
  ],
  declarations: [
    HomeComponent,
    PropertyDetailsComponent
  ]
} )
export class HomeModule
{
}
