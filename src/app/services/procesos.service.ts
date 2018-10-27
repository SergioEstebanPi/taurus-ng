import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { Globals } from '../globals';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProcesosService {

 
  url:string;
  encabezados:any;
  procesos:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
    this.url = _globals.url + '/proceso';
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
  traerprocesos():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarproceso(id):Observable<any>{
  	let urlproceso = this.url + "/" + id;
  	return this.http.get<any>(
  		urlproceso,
  		this.encabezados
  	);
  }

  /* POST create */
  crearproceso(proceso){
  	return this.http.post<any>(
  		this.url,
  		proceso,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarproceso(proceso){
	let urlproceso = this.url;
  	return this.http.put<any>(
  		urlproceso,
  		proceso,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarproceso(id){
  	let urlproceso = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlproceso,
  		this.encabezados
  	);
  }
}
