import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from "../Shared/shared.module";


@NgModule( {
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    LayoutComponent
  ]
} )
export class LayoutModule
{
}
