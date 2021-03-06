import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

import { Output, EventEmitter } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formulario:any;
  error:boolean;

  modalRef:any;

  constructor(private _usuarios:UsuariosService,
    private _router: Router,
    public activeModal: NgbActiveModal,
    private _modal: NgbModal) {
    this.formulario = {
        nombre: "",
        correo: "",
        contrasena: ""
    };
  }


  ngOnInit() {
  }

  crearCuenta(){
    this.error = false;
  	this._usuarios
  		.crearCuenta(this.formulario)
  		.subscribe(
  			respuesta => {
  				let autenticacion = {
              username: this.formulario.correo,
  						password: this.formulario.contrasena,
  				};
          //this.iniciarSesion(autenticacion);
          //this.activeModal.close(autenticacion);
          this.iniciarSesion(autenticacion);
  			},
  			error => {
          this.error = true;
  				console.log(error);
  			}
  		);
  }

  iniciarSesion(autenticacion) {
    this._usuarios
      .obtenerToken(autenticacion)
      .subscribe(
        respuesta => {
          //console.log('respuesta: ' + respuesta);
          //localStorage.setItem("SessionToken", respuesta.jwt);
          localStorage.setItem("SessionToken", respuesta.headers.get("Authorization"));
          this.error = false;
          this.activeModal.close();
          //this.modalRef = this._modal.open(NgbdModalContent);
          //this.buscarUsuario();
        },
        error => {
          this.error = true;
          console.log(error);
        }
      );
  }



}