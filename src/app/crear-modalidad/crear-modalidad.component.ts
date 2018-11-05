import { Component, OnInit } from '@angular/core';

import {  ModalidadesService } from '../services/modalidades.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-crear-modalidad',
  templateUrl: './crear-modalidad.component.html',
  styleUrls: ['./crear-modalidad.component.css']
})
export class CrearModalidadComponent implements OnInit {

	modalidad:any;
  error:boolean;

  constructor(private _modalidades:ModalidadesService,
  			private _router:Router,
            private _globals:Globals) {
  	this.modalidad = {
  		nombre: "",
  		descripcion: ""
  	};
  }

  ngOnInit() {
  }

  crearModalidad(){
		this._modalidades.crearmodalidad(this.modalidad)
			.subscribe(
				respuesta => {
          this.error = false;
          alert('Modalidad creada correctamente');
          this.modalidad = respuesta;
          //console.log(this.modalidad);
					this._router.navigate(["/ver-modalidad", this.modalidad.id]);
					//console.log(respuesta);
				},
				error => {
          this.error = true;
					console.log(error);
				}
		);
  }


}
