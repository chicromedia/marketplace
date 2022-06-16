import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./Layout/layout.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( APP_ROUTES ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule
{
}
