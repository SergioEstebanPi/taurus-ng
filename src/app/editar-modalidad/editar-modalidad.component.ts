import { Component, OnInit } from '@angular/core';

import { ModalidadesService } from '../services/modalidades.service';
import { Globals } from '../globals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-modalidad',
  templateUrl: './editar-modalidad.component.html',
  styleUrls: ['./editar-modalidad.component.css']
})


export class EditarModalidadComponent implements OnInit {

	modalidad:any;
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
  }

  ngOnInit() {
  	this._activeroute.params.subscribe(
  		respuesta => {
  			this._modalidades.mostrarModalidad(respuesta['id'])
	  			.subscribe(
	  				respuesta => {
	  					//console.log(respuesta);
	  					this.modalidad = respuesta;
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


  editarModalidad(){
  	this._modalidades.modificarModalidad(this.modalidad)
  		.subscribe(
  			respuesta => {
          this.error = false;
          console.log(respuesta);
          alert('modalidad modificado correctamente');
          this.modalidad = respuesta;
          //this._router.navigate(['/traer-modalidads']);
  				//this._router.navigate(['/mostrar_modalidad', respuesta['id']]);
  				//console.log(respuesta);
  			},
  			error => {
          this.error = true;
  				console.log(error);
  			}
  		);
  }

}
