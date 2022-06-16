import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/btn-primary/button-primary.component';
import { RouterModule } from "@angular/router";


@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ButtonPrimaryComponent
  ],
  exports: [
    RouterModule,
    ButtonPrimaryComponent
  ]
} )
export class SharedModule
{
}
