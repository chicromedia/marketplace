import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './Features/home/home.component';
import { LayoutModule } from "./Layout/layout.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
