import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'btn-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: [ './button-primary.component.scss' ]
} )
export class ButtonPrimaryComponent implements OnInit
{
  @Input()
  public label: string = '';
  @Input()
  public type: 'button' | 'submit' = 'button';
  @Input()
  public disabled: boolean = false;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
