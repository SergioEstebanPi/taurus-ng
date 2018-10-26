import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Globals } from './globals';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ModalidadesComponent } from './modalidades/modalidades.component';
import { CrearModalidadComponent } from './crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './editar-modalidad/editar-modalidad.component';

import { RouterModule, Routes} from '@angular/router';


const rutas:Routes=[
  {path:"", component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"acercade", component:AcercadeComponent},
  {path:"iniciar-sesion", component:IniciarSesionComponent},
  {path:"modalidades", component:ModalidadesComponent},
  {path:"crear-modalidad", component:CrearModalidadComponent},
  {path:"editar-modalidad/:id", component:EditarModalidadComponent},  
  {path:"*", redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiedepaginaComponent,
    AcercadeComponent,
    ContactoComponent,
    InicioComponent,
    IniciarSesionComponent,
    ModalidadesComponent,
    CrearModalidadComponent,
    EditarModalidadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
  	Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
