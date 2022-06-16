import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { LoadProperties } from "./store/home-actions";
import { Observable } from "rxjs";
import { IProperty } from "../../Shared/interface/property";
import { HomeState } from "./store/home-state";

@Component( {
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit
{

  @Select( HomeState.inShow ) property$?: Observable<IProperty>;

  constructor( private store: Store )
  {
  }

  ngOnInit(): void
  {
    this.store.dispatch( new LoadProperties() );
  }

}
