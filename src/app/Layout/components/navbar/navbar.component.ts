import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu-item';

@Component( {
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
} )
export class NavbarComponent implements OnInit
{

  menuItems: IMenuItem[] = [];

  constructor()
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

}
