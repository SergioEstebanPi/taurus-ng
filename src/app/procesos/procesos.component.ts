import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Globals } from '../globals';

import { ProcesosService } from '../services/procesos.service';


@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {

 procesos:Array<any>;
  frase:string;

  constructor(private _procesos:ProcesosService,
    private _globals:Globals,
    private _router:Router) {
    this.procesos = [];
  }

  ngOnInit() {
    this.traerprocesos();
  }


  onKey(event:any){
    this.frase = event.target.value;
    this.traerprocesos();
  }    


  traerprocesos(){
  	this._procesos.traerprocesos()
  		.subscribe(
  			respuesta => {
          if (this.frase && this.frase.trim() != '') {
            this.procesos = this.procesos.filter(
              (item) => {
                return (item.nombre.toLowerCase().indexOf(this.frase.toLowerCase()) > -1);
              }
            );
          } else {
            this.procesos = respuesta;
          }
          this._router.navigate(['/procesos']);
  				//this.procesos = respuesta;
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  mostrarProceso(id){
  	this._procesos.mostrarproceso(id)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerprocesos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminarProceso(id){
  	// let confirmacion = confirm("Estas seguro?");
  	// if(confirmacion){
	  // 	this._procesos(id)
	  // 		.subscribe(
	  // 			respuesta => {
	  // 				//console.log(respuesta);
	  // 				this.traerprocesos();
	  // 			},
	  // 			error => {
	  // 				console.log();
	  // 			}
	  // 		);
  	// }
  }
}

