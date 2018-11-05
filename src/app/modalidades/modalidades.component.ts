import { Component, OnInit } from '@angular/core';

import { ModalidadesService } from '../services/modalidades.service';
import  { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.component.html',
  styleUrls: ['./modalidades.component.css']
})
export class ModalidadesComponent implements OnInit {

  modalidades:Array<any>;
  frase:string;

  constructor(private _modalidades:ModalidadesService,
    private _globals:Globals,
    private _router:Router) {
    this.modalidades = [];
  }

  ngOnInit() {
    this.traermodalidades();
  }


  onKey(event:any){
    this.frase = event.target.value;
    this.traermodalidades();
  }    


  traermodalidades(){
  	this._modalidades.traermodalidades()
  		.subscribe(
  			respuesta => {
          if (this.frase && this.frase.trim() != '') {
            this.modalidades = this.modalidades.filter(
              (item) => {
                return (item.nombre.toLowerCase().indexOf(this.frase.toLowerCase()) > -1);
              }
            );
          } else {
            this.modalidades = respuesta;
          }
          this._router.navigate(['/modalidades']);
  				//this.modalidades = respuesta;
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  mostrarModalidad(id){
  	this._modalidades.mostrarmodalidad(id)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traermodalidades();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminarModalidad(id){
  	let confirmacion = confirm("Estas seguro?");
  	if(confirmacion){
	  	this._modalidades.eliminarmodalidad(id)
	  		.subscribe(
	  			respuesta => {
	  				//console.log(respuesta);
	  				this.traermodalidades();
	  			},
	  			error => {
	  				console.log();
	  			}
	  		);
  	}
  }
}
