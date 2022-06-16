import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutModule } from "./Layout/layout.module";
import { NgxsModule } from "@ngxs/store";
import { CommonState } from "./Shared/store/states/common-state";
import { HttpClientModule } from "@angular/common/http";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { environment } from "../environments/environment";

@NgModule( {
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot( [
      CommonState
    ] ),
    NgxsReduxDevtoolsPluginModule.forRoot( { name: 'MarketPlace', disabled: environment.production } ),
    LayoutModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'DOP'
  } ],
  bootstrap: [ AppComponent ]
} )
export class AppModule
{
}
