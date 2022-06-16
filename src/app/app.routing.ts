import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./Layout/layout.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./Features/home/home.module').then( m => m.HomeModule )
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
