import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url:string;
  encabezados:any;
  usuarios:Array<any>;

  constructor(private http:HttpClient,
    private _globals:Globals) {
    this.url = _globals.url + '/usuario';
  	this.encabezados = {
  		headers: new HttpHeaders(
		  	{
		  		"Content-Type": "application/json"
		  		//"Authorization": "Bearer " + localStorage.getItem("SessionToken")
		  	}
	  	),
      observe: "response"
  	};
  }

	obtenerToken(autenticacion): Observable<any> {
		let urlAutenticacion = this._globals.url + "/login";
		let parametros = JSON.stringify(autenticacion);
		return this.http.post<any>(
			urlAutenticacion,
			parametros,
			this.encabezados
		);   
	}


	crearCuenta(usuario): Observable<any> {
		let urlCrearCuenta = this.url;
		let parametros = JSON.stringify(usuario);
		return this.http.post<any>(
			urlCrearCuenta,
			parametros,
			this.encabezados
		);
	}

	usuarioActual(): Observable<any> {
		let urlUsuario = this._globals.url + "/usuario";
		let encabezadosToken = {
			headers: new HttpHeaders(
				{
					"Content-Type": "application/json",
					"Authorization": localStorage.getItem("SessionToken")
				}
			)
		};
		return this.http.get<any>(
			urlUsuario,
			encabezadosToken
		);
	}


	cerraSesion(): Observable<any> {
		let urlCerrarSesion = this._globals.url + "/cerrar-sesion";
		return this.http.get<any>(
			urlCerrarSesion,
			this.encabezados
		);
	}	  

  /* GET index */
  traerusuarios():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarusuario(id):Observable<any>{
  	let urlusuario = this.url + "/" + id;
  	return this.http.get<any>(
  		urlusuario,
  		this.encabezados
  	);
  }

  /* POST create */
  crearusuario(usuario){
  	return this.http.post<any>(
  		this.url,
  		usuario,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarusuario(usuario){
	let urlusuario = this.url;
  	return this.http.put<any>(
  		urlusuario,
  		usuario,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarusuario(id){
  	let urlusuario = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlusuario,
  		this.encabezados
  	);
  }
}
