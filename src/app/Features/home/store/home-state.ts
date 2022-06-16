import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { GoToPropertyById, LoadProperties } from "./home-actions";
import { PropertiesService } from "../../../Shared/services/properties.service";
import { catchError, EMPTY, tap, throwError } from "rxjs";
import { IProperty } from "../../../Shared/interface/property";
import { Injectable } from "@angular/core";
import { notEmpty } from "../../../Shared/utils/functions";
import { GoToPage } from "../../../Shared/store/actions/common-actions";

interface IHomeState
{
  properties: IProperty[];
  loaded: boolean;
  inShow?: IProperty | null;
  nextId?: string;
}

@State<IHomeState>( {
  name: 'home',
  defaults: {
    properties: [],
    loaded: false
  }
} )
@Injectable()
export class HomeState
{

  constructor( private store: Store, private properties: PropertiesService )
  {
  }

  @Selector()
  static isLoaded( { loaded }: IHomeState )
  {
    return loaded;
  }

  @Selector()
  static inShow( { inShow }: IHomeState )
  {
    return inShow;
  }

  @Selector()
  static nextId( { nextId }: IHomeState )
  {
    return nextId as string;
  }

  @Action( LoadProperties )
  load( { patchState, dispatch, getState }: StateContext<IHomeState>, { payload }: LoadProperties )
  {
    const { loaded } = getState();
    if ( !loaded )
    {
      return this.properties.getAll().pipe(
        tap( ( { properties } ) =>
        {
          if ( notEmpty( properties ) )
          {
            patchState( { properties, loaded: true } );
            dispatch( new GoToPage( [ '/property', payload || properties[ 0 ]._id ] ) );
          }
        } ),
        catchError( err =>
        {
          patchState( { loaded: true } );
          return throwError( err )
        } )
      )
    }
    return EMPTY;
  }

  @Action( GoToPropertyById )
  goToPropertyById( { patchState, getState }: StateContext<IHomeState>, { payload }: GoToPropertyById )
  {
    const { properties } = getState();
    if ( notEmpty( properties ) )
    {
      const findIndex = properties.findIndex( p => p._id === payload );
      const nextId = findIndex < properties.length - 1
        ? properties[ findIndex + 1 ]!._id
        : properties[ 0 ]!._id;

      patchState( { inShow: properties[ findIndex ], nextId } );
    }
  }
}
