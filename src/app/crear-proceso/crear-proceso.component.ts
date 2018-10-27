import { Component, OnInit } from '@angular/core';

import {  ProcesosService } from '../services/procesos.service';
import {  CompaniasService } from '../services/companias.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-crear-proceso',
  templateUrl: './crear-proceso.component.html',
  styleUrls: ['./crear-proceso.component.css']
})
export class CrearProcesoComponent implements OnInit {

	proceso:any;
  compania:any;
  error:boolean;

  constructor(private _procesos:ProcesosService,
    private _companias:CompaniasService,
  			private _router:Router,
            private _globals:Globals) {
  	this.proceso =     {
  		compania: "",
        numero: "",
        palabraclave: "",
        objeto: "",
        presupuestooficial: "",
        plazoejecucion: "",
        fechainicio: "",
        formadepago: "",
        garantia: ""
    };
  }

  ngOnInit() {
    this.traerCompanias();
  }

  traerCompanias(){
    this._companias.traercompanias()
      .subscribe(
        respuesta => {
          if (this.frase && this.frase.trim() != '') {
            this.companias = this.companias.filter(
              (item) => {
                return (item.nombre.toLowerCase().indexOf(this.frase.toLowerCase()) > -1);
              }
            );
          } else {
            this.companias = respuesta;
          }
          this._router.navigate(['/modalidades']);
          //this.modalidades = respuesta;
        },
        error => {
          console.log(error);
        }
      );    
  }

  crearproceso(){
		this._procesos.crearproceso(this.proceso)
			.subscribe(
				respuesta => {
          this.error = false;
          alert('proceso creada correctamente');
          this.proceso = respuesta;
          console.log(this.proceso);
					//this._router.navigate(["/traer-proceso");
					//console.log(respuesta);
				},
				error => {
          this.error = true;
					console.log(error);
				}
		);
  }
}
