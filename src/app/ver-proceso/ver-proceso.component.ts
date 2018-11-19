import { Component, OnInit } from '@angular/core';

import {  ProcesosService } from '../services/procesos.service';

import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-ver-proceso',
  templateUrl: './ver-proceso.component.html',
  styleUrls: ['./ver-proceso.component.css']
})
export class VerProcesoComponent implements OnInit {

	proceso:any;
  urlreportes:string;

  constructor(private _procesos:ProcesosService,
  	private _activeroute:ActivatedRoute,
    private _globals:Globals
  	) { 
  	this.proceso = {
  		modalidad: {
  			nombre: ""
  		},
      formadepago: {
        nombre: ""
      },
      garantia: {
        nombre: ""
      }
  	};
    this.urlreportes = "https://contratacion.herokuapp.com/reporte";
    //this.urlreportes = "http://localhost:8080/reporte";
  }

  ngOnInit() {
  	this._activeroute.params.subscribe(
  		respuesta => {
        //alert(respuesta);
  			this._procesos.mostrarproceso(respuesta['id'])
	  			.subscribe(
	  				respuesta => {
	  					this.proceso = respuesta;
              //this.urlreportes + this._globals.urlreportes;
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
