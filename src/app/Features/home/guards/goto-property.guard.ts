import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { GoToPropertyById, LoadProperties } from "../store/home-actions";
import { HomeState } from "../store/home-state";

@Injectable( {
  providedIn: 'root'
} )
export class GotoPropertyGuard implements CanActivate
{

  constructor( private store: Store, private router: Router )
  {
  }

  canActivate( { paramMap }: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree>
  {
    const propertyId = paramMap.get( 'id' ) as string;
    return this.store.selectOnce( HomeState.isLoaded ).pipe(
      map( loaded =>
      {
        if ( loaded )
        {
          this.store.dispatch( new GoToPropertyById( propertyId ) );
          return true;
        } else
        {
          this.store.dispatch( new LoadProperties( propertyId ) );
          return this.router.parseUrl( '/' );
        }
      } )
    )
  }

}
