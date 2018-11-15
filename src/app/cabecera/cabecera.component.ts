import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from '../crear-cuenta/crear-cuenta.component';

import { Globals } from '../globals';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Output() 
  onLogeado: EventEmitter<any> = new EventEmitter();

  logeado:boolean;
  error:boolean;
  usuario:any;

  modalRef:any;
  iniciarSesion:boolean;
  crearCuenta:boolean;
  url:string;

  constructor(private _usuarios: UsuariosService,
    private _router: Router,
    private _modal: NgbModal,
    private _globlas: Globals) {
      this.url = this._globlas.url;
      this.usuario = {
        nombre: "",
        correo: ""
      };
      this.logeado = false;
      this.error = false;
  }

  ngOnInit() {
    if(localStorage.getItem("SessionToken") != null){
      this.buscarUsuario();
    } else {
      this._router.navigateByUrl('/');
    }
  }

  openIniciarSesion() {
    this.modalRef = this._modal.open(IniciarSesionComponent);
    //this.modalRef.componentInstance.name = 'World';
    this.modalRef.result
      .then(
          (result) => {
           //console.log(result);
           this.iniciarSesion = true;
           //this._router.navigateByUrl('/');
           //this.logeado = true;
           //this.onLogeado.emit(true);
           //this.usuario = respuesta;
           this.buscarUsuario();
           //this.iniciarSesion(result);
         }
       ).catch(
         (error) => {
           //console.log(error);
         }
      );
  }

  openCrearCuenta(){
    this.modalRef = this._modal.open(CrearCuentaComponent);
    //this.modalRef.componentInstance.name = 'World';
    this.modalRef.result
      .then(
          (result) => {
           //console.log(result);
           //this.iniciarSesion(result);
           this.crearCuenta = true;
           //this._router.navigateByUrl('/');
           //this.logeado = true;
           //this.onLogeado.emit(true);
           //this.usuario = respuesta;
           this.buscarUsuario();
         }
       ).catch(
         (error) => {
           //this.modalRef.componentInstance.name = 'World';
           //console.log(error);
         }
      );
  }

  buscarUsuario(){
    this._usuarios.usuarioActual()
      .subscribe(
        respuesta => {
          this.usuario = respuesta;
          this.logeado = true;
          if (this.iniciarSesion || this.crearCuenta) {
            this.onLogeado.emit(true);
            this.iniciarSesion = false;
            this.crearCuenta = false;
          }
          //this.modalRef2 = this._modal.open(NgbdModalContent);
          //this._router.navigateByUrl('/');
        },
        error => {
          console.log(error);
        }
      );
  }


  cerrarSesion() {
    localStorage.removeItem('SessionToken');
    //localStorage.removeItem('compania');
    this._usuarios.cerraSesion()
      .subscribe(
        respuesta => {
          //window.location.reload();
          this.logeado = false;
          this.usuario = {
            nombre: "",
            correo: ""
          };
          this._router.navigateByUrl('/');
        },
        error => {
          //window.location.reload();
          console.log(error);
          this._router.navigateByUrl('/');
        }
      );
    //this._router.navigateByUrl('/');
  }
}