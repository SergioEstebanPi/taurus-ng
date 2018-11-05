import { Component, OnInit } from '@angular/core';

import {  ProcesosService } from '../services/procesos.service';
import {  CompaniasService } from '../services/companias.service';
import {  FormadepagosService } from '../services/formadepagos.service';
import {  GarantiasService } from '../services/garantias.service';
import { ModalidadesService } from '../services/modalidades.service';

import { Router } from '@angular/router';
import { Globals } from '../globals';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-crear-proceso',
  templateUrl: './crear-proceso.component.html',
  styleUrls: ['./crear-proceso.component.css']
})
export class CrearProcesoComponent implements OnInit {

	proceso:any;
  error:boolean;
 
  compania:any;
  companias:any;
  formadepago:any;
  formadepagos:any;
  garantia:any;
  garantias:any;
  //modalidad:any;

  constructor(private _procesos:ProcesosService,
    private _companias:CompaniasService,
    private _formadepagos:FormadepagosService,
    private _garantias:GarantiasService,    
    private _modalidades:ModalidadesService, 
  	private _router:Router,
    private _globals:Globals,
    private _activeroute:ActivatedRoute) {
  	this.proceso =     {
  		  compania: {},
        modalidad: {},
        numero: "",
        palabraclave: "",
        objeto: "",
        presupuestooficial: "",
        plazoejecucion: "",
        fechainicio: "",
        formadepago: {},
        garantia: {}
    };
  }

  ngOnInit() {
    this._activeroute.params.subscribe(
      respuesta => {
        this.mostrarmodalidad(respuesta['modalidad_id']);
      },
      error => {
        console.log(error);
      }
    ); 

    let compania_id = localStorage.getItem("compania");
    this._companias.mostrarcompania(compania_id)
      .subscribe(
        respuesta => {
          this.proceso.compania = respuesta;
        },
        error => {
          console.log(error);
        }
      );
    
    //alert(this.modalidad);
    //console.log(this.modalidad);
    //this.traerCompanias();
    this.traerFormadepagos();
    this.traerGarantias();       
  }

  mostrarmodalidad(id){
    this._modalidades.mostrarmodalidad(id)
      .subscribe(
        respuesta => {
          this.proceso.modalidad = respuesta;
          //console.log(respuesta);
          //this.traercompanias();
        },
        error => {
          console.log();
        }
      );
  }  

/*
  traerCompanias(){
    this._companias.traercompanias()
      .subscribe(
        respuesta => {
          this.companias = respuesta;
        },
        error => {
          console.log(error);
        }
      ); 
  }
  */

  traerFormadepagos(){
    this._formadepagos.traerformadepagos()
      .subscribe(
        respuesta => {
          this.formadepagos = respuesta;
        },
        error => {
          console.log(error);
        }
      ); 
  }

  traerGarantias(){
    this._garantias.traergarantias()
      .subscribe(
        respuesta => {
          this.garantias = respuesta;
        },
        error => {
          console.log(error);
        }
      ); 
  }    

  cambiarcompania(compania){
    this.proceso.compania = compania;
  }

  cambiarformadepago(formadepago){
    this.proceso.formadepago = formadepago;
  }

  cambiargarantia(garantia){
    this.proceso.garantia = garantia;
  }

  crearproceso(){
		this._procesos.crearproceso(this.proceso)
			.subscribe(
				respuesta => {
          this.error = false;
          alert('proceso creado correctamente');
          this.proceso = respuesta;
          console.log(this.proceso);
					this._router.navigate(["/ver-modalidad", this.proceso.modalidad]);
					//console.log(respuesta);
				},
				error => {
          this.error = true;
					console.log(error);
				}
		);
  }
}
