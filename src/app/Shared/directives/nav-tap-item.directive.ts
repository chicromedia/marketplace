import { Directive, Input, TemplateRef } from '@angular/core';

@Directive( {
  selector: '[navTapItem]'
} )
export class NavTapItemDirective
{
  @Input( 'navTapItem' )
  label: string = '';

  constructor( public ref: TemplateRef<NavTapItemDirective> )
  {
  }

}
