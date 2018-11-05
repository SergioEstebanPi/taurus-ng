import { Component, OnInit } from '@angular/core';


import { CompaniasService } from '../services/companias.service';
import  { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companias',
  templateUrl: './companias.component.html',
  styleUrls: ['./companias.component.css']
})
export class CompaniasComponent implements OnInit {

	//companias:any;

  companias:Array<any>;
  frase:string;

  constructor(private _companias:CompaniasService,
    private _globals:Globals,
    private _router:Router) {
    this.companias = [];
  }

  ngOnInit() {
    this.traercompanias();
  }


  onKey(event:any){
    this.frase = event.target.value;
    this.traercompanias();
  }    


  traercompanias(){
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
          this._router.navigate(['/companias']);
  				//this.companias = respuesta;
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

  mostrarcompania(id){
  	this._companias.mostrarcompania(id)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traercompanias();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminarcompania(id){
  	let confirmacion = confirm("Estas seguro?");
  	if(confirmacion){
	  	this._companias.eliminarcompania(id)
	  		.subscribe(
	  			respuesta => {
	  				//console.log(respuesta);
	  				this.traercompanias();
	  			},
	  			error => {
	  				console.log();
	  			}
	  		);
  	}
  }

}
