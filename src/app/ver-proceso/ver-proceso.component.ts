import { Component, OnInit } from '@angular/core';

import {  ProcesosService } from '../services/procesos.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-proceso',
  templateUrl: './ver-proceso.component.html',
  styleUrls: ['./ver-proceso.component.css']
})
export class VerProcesoComponent implements OnInit {

	proceso:any;

  constructor(private _procesos:ProcesosService,
  	private _activeroute:ActivatedRoute
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
  }

  ngOnInit() {
  	this._activeroute.params.subscribe(
  		respuesta => {
        //alert(respuesta);
  			this._procesos.mostrarproceso(respuesta['id'])
	  			.subscribe(
	  				respuesta => {
	  					this.proceso = respuesta;
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
