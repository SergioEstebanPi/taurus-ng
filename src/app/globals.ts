import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  //url:string = 'https://contratacion.herokuapp.com/';
  url: string = 'http://localhost:8080';
  ADMINISTRADOR:string = '0';
  VECINO:string = '1';
  ALMACEN:string = '2';
  RECOLECTOR:string = '3';
  imgdefault:string = 'assets/img/default/44_supermarket_cart_shopping_item_add_product-512.png';
  
}