import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu-item';
import { Store } from "@ngxs/store";
import { HomeState } from "../../../Features/home/store/home-state";
import { GoToPage } from "../../../Shared/store/actions/common-actions";

@Component( {
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
} )
export class NavbarComponent implements OnInit
{

  menuItems: IMenuItem[] = [];

  constructor( private store: Store )
  {
  }

  ngOnInit(): void
  {
    this.menuItems = [
      {
        label: 'En venta',
        path: '#'
      },
      {
        label: 'En alquiler',
        path: '#'
      },
      {
        label: 'Hipoteca',
        path: '#'
      },
      {
        label: 'Necesito ayuda',
        path: '#'
      }
    ]
  }

  next()
  {
    const nextId = this.store.selectSnapshot( HomeState.nextId );
    this.store.dispatch( new GoToPage( [ '/property', nextId ] ) )
  }
}
