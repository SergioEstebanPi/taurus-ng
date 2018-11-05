import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class FormadepagosService {

  url:string;
  encabezados:any;
  formadepagos:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
    this.url = _globals.url + '/formadepago';
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
  traerformadepagos():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarformadepago(id):Observable<any>{
  	let urlformadepago = this.url + "/" + id;
  	return this.http.get<any>(
  		urlformadepago,
  		this.encabezados
  	);
  }

  /* POST create */
  crearformadepago(formadepago){
  	return this.http.post<any>(
  		this.url,
  		formadepago,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarformadepago(formadepago){
	let urlformadepago = this.url;
  	return this.http.put<any>(
  		urlformadepago,
  		formadepago,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarformadepago(id){
  	let urlformadepago = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlformadepago,
  		this.encabezados
  	);
  }
}