import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { NavTapItemDirective } from "../../directives/nav-tap-item.directive";

@Component( {
  selector: 'nav-taps',
  templateUrl: './nav-taps.component.html',
  styleUrls: [ './nav-taps.component.scss' ]
} )
export class NavTapsComponent implements OnInit, AfterContentInit
{

  @ContentChildren( NavTapItemDirective ) items!: QueryList<NavTapItemDirective>

  selected!: NavTapItemDirective;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  ngAfterContentInit()
  {
    this.selected = this.items.first;
  }

}
