import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ModalidadesService } from '../services/modalidades.service';
import { Globals } from '../globals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-modalidad',
  templateUrl: './ver-modalidad.component.html',
  styleUrls: ['./ver-modalidad.component.css']
})
export class VerModalidadComponent implements OnInit {

	modalidad:any;
	procesos:any;
  	error:boolean;
  	url:string;

  constructor(private _modalidades:ModalidadesService,
  		private _activeroute:ActivatedRoute,
  		private _router:Router,
        private _globals:Globals) {
    this.url = _globals.url;
  	this.modalidad = {
  		//id: "",
  		nombre: "",
  		descripcion: ""
  	};
  	this.procesos = [
    ];
  }

  ngOnInit() {
  	this._activeroute.params.subscribe(
  		respuesta => {
        //alert(respuesta);
  			this._modalidades.mostrarmodalidad(respuesta['id'])
	  			.subscribe(
	  				respuesta => {
	  					//console.log(respuesta);
	  					this.modalidad = respuesta;
              //this._modalidades.modalidadActual = this.modalidad;
              //alert(this.modalidad);
              //console.log(this.modalidad);
	  					this.procesos = respuesta.procesos;
	  					//console.log(this.modalidad);
	  					//console.log(this.procesos);
	  				},
	  				error => {
	  					console.log(error);
	  				}
	  			);
  			//console.log(respuesta);
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }

}
