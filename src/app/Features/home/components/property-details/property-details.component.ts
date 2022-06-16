import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from "../../../../Shared/interface/property";
import { Store } from "@ngxs/store";
import { GoToPage } from "../../../../Shared/store/actions/common-actions";
import { HomeState } from "../../store/home-state";

@Component( {
  selector: 'property-details',
  templateUrl: './property-details.component.html',
  styleUrls: [ './property-details.component.scss' ]
} )
export class PropertyDetailsComponent implements OnInit
{

  @Input()
  property!: IProperty;

  constructor( private store: Store )
  {
  }

  ngOnInit(): void
  {
  }

  next()
  {
    const nextId = this.store.selectSnapshot( HomeState.nextId );
    this.store.dispatch( new GoToPage( [ '/property', nextId ] ) )
  }
}
