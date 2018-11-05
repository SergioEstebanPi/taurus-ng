import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class CompaniasService {

  url:string;
  encabezados:any;
  Companias:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
    this.url = _globals.url + '/compania';
  	this.encabezados = {
  		headers: new HttpHeaders(
		  	{
		  		"Content-Type": "application/json",
		  		"Authorization": localStorage.getItem("SessionToken")
		  	}
	  	)
  	};
  }

  /* GET index */
  traercompanias():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarcompania(id):Observable<any>{
  	let urlcompania = this.url + "/" + id;
  	return this.http.get<any>(
  		urlcompania,
  		this.encabezados
  	);
  }

  /* POST create */
  crearcompania(compania){
  	return this.http.post<any>(
  		this.url,
  		compania,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarcompania(compania){
	let urlcompania = this.url;
  	return this.http.put<any>(
  		urlcompania,
  		compania,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarcompania(id){
  	let urlcompania = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlcompania,
  		this.encabezados
  	);
  }
}
