import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class GarantiasService {

  url:string;
  encabezados:any;
  garantias:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
    this.url = _globals.url + '/garantia';
  	this.encabezados = {
  		headers: new HttpHeaders(
		  	{
		  		"Content-Type": "application/json",
		  		"Authorization": "Bearer " + localStorage.getItem("SessionToken")
		  	}
	  	)
  	};
  }

  /* GET index */
  traergarantias():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrargarantia(id):Observable<any>{
  	let urlgarantia = this.url + "/" + id;
  	return this.http.get<any>(
  		urlgarantia,
  		this.encabezados
  	);
  }

  /* POST create */
  creargarantia(garantia){
  	return this.http.post<any>(
  		this.url,
  		garantia,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificargarantia(garantia){
	let urlgarantia = this.url;
  	return this.http.put<any>(
  		urlgarantia,
  		garantia,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminargarantia(id){
  	let urlgarantia = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlgarantia,
  		this.encabezados
  	);
  }
}