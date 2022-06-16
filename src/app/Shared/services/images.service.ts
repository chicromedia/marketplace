import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Image } from "../interface/image";

@Injectable( {
  providedIn: 'root'
} )
export class ImagesService
{

  private readonly API_BASE: string = "https://rtapi-7h6urepkoq-ue.a.run.app"

  constructor( private http: HttpClient )
  {
  }

  getAllById( id: string ): Observable<Image[]>
  {
    return this.http.get<{ images: Image[] }>( `${ this.API_BASE }/images/${ id }` )
      .pipe(
        map( ( { images } ) => images )
      )
  }
}
