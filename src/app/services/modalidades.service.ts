import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  url:string;
  encabezados:any;
  Modalidades:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
    this.url = _globals.url + '/modalidad';
  	this.encabezados = {
  		headers: new HttpHeaders(
		  	{
		  		"Content-Type": "application/json"//,
		  		//"Authorization": "Bearer " + localStorage.getItem("SessionToken")
		  	}
	  	)
  	};
  }

  /* GET index */
  traerModalidades():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarModalidad(id):Observable<any>{
  	let urlmodalidad = this.url + "/" + id;
  	return this.http.get<any>(
  		urlmodalidad,
  		this.encabezados
  	);
  }

  /* POST create */
  crearModalidad(modalidad){
  	return this.http.post<any>(
  		this.url,
  		modalidad,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarModalidad(modalidad){
	let urlmodalidad = this.url;
  	return this.http.put<any>(
  		urlmodalidad,
  		modalidad,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarModalidad(id){
  	let urlmodalidad = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlmodalidad,
  		this.encabezados
  	);
  }
}
