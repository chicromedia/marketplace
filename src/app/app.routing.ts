import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./Layout/layout.component";
import { HomeComponent } from "./Features/home/home.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'p/:id',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( APP_ROUTES ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule
{
}
