import { Action, State, StateContext } from "@ngxs/store";
import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { GoToPage } from "../actions/common-actions";

interface ICommonState
{

}

@State<ICommonState>( {
  name: 'common'
} )
@Injectable()
export class CommonState
{
  constructor( private router: Router, private zone: NgZone )
  {
  }

  @Action( GoToPage )
  goToPage( {}: StateContext<ICommonState>, { payload }: GoToPage )
  {
    return this.zone.run(
      () => this.router.navigate( payload )
    )
  }
}
