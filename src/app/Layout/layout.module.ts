import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';


@NgModule( {
  declarations: [
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
} )
export class LayoutModule
{
}
