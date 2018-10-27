import { Component, OnInit } from '@angular/core';

import {  ProcesosService } from '../services/procesos.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-crear-proceso',
  templateUrl: './crear-proceso.component.html',
  styleUrls: ['./crear-proceso.component.css']
})
export class CrearProcesoComponent implements OnInit {

	proceso:any;
  error:boolean;

  constructor(private _procesoes:ProcesosService,
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
  }

  crearproceso(){
		this._procesoes.crearproceso(this.proceso)
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
