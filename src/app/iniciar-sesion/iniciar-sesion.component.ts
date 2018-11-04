import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../globals';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

	usuario:any;
	//username:string;
	//password:string;
	error:any;

  constructor(private _usuarios: UsuariosService,
		private _router: Router,
		public activeModal: NgbActiveModal) {
  		this.usuario = {
  			username: "",
  			password: ""
  		}
   }

  ngOnInit() {


  }

  iniciarSesion() {
  	this.error = false;
    this._usuarios
      .obtenerToken(this.usuario)
      .subscribe(
        respuesta => {
     	console.log(respuesta);
          localStorage.setItem("SessionToken", respuesta);
          this.error = false;
          this.activeModal.close(this.usuario);
        },
        error => {
          this.error = true;
          console.log(error);
        }
      );
  }  

}
