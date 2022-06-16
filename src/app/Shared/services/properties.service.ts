import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProperty } from "../interface/property";

@Injectable( {
  providedIn: 'root'
} )
export class PropertiesService
{

  private readonly API_BASE: string = "https://rtapi-7h6urepkoq-ue.a.run.app"

  constructor( private http: HttpClient )
  {
  }

  getAll()
  {
    return this.http.get<{ properties: IProperty[] }>( `${ this.API_BASE }/properties` );
  }
}
