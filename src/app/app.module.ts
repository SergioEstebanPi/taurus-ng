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
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProcesosComponent } from './procesos/procesos.component';
import { CrearProcesoComponent } from './crear-proceso/crear-proceso.component';
import { EditarProcesoComponent } from './editar-proceso/editar-proceso.component';
import { VerModalidadComponent } from './ver-modalidad/ver-modalidad.component';
import { VerProcesoComponent } from './ver-proceso/ver-proceso.component';
import { CompaniasComponent } from './companias/companias.component';
import { CrearCompaniaComponent } from './crear-compania/crear-compania.component';
import { EditarCompaniaComponent } from './editar-compania/editar-compania.component';
import { VerCompaniaComponent } from './ver-compania/ver-compania.component';
import { FormadepagosComponent } from './formadepagos/formadepagos.component';
import { CrearFormadepagoComponent } from './crear-formadepago/crear-formadepago.component';
import { EditarFormadepagoComponent } from './editar-formadepago/editar-formadepago.component';
import { VerFormadepagoComponent } from './ver-formadepago/ver-formadepago.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { CrearParametroComponent } from './crear-parametro/crear-parametro.component';
import { EditarParametroComponent } from './editar-parametro/editar-parametro.component';
import { VerParametroComponent } from './ver-parametro/ver-parametro.component';
import { TipocontratosComponent } from './tipocontratos/tipocontratos.component';
import { CrearTipocontratoComponent } from './crear-tipocontrato/crear-tipocontrato.component';
import { EditarTipocontratoComponent } from './editar-tipocontrato/editar-tipocontrato.component';
import { VerTipocontratoComponent } from './ver-tipocontrato/ver-tipocontrato.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { GarantiasComponent } from './garantias/garantias.component';
import { CrearGarantiaComponent } from './crear-garantia/crear-garantia.component';
import { EditarGarantiaComponent } from './editar-garantia/editar-garantia.component';
import { VerGarantiaComponent } from './ver-garantia/ver-garantia.component';


const rutas:Routes=[
  {path:"", component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"acercade", component:AcercadeComponent},
  {path:"iniciar-sesion", component:IniciarSesionComponent},
  {path:"modalidades", component:ModalidadesComponent},
  {path:"crear-modalidad", component:CrearModalidadComponent},
  {path:"editar-modalidad/:id", component:EditarModalidadComponent},
  {path:"ver-modalidad/:id", component:VerModalidadComponent},  
  {path:"procesos", component:ProcesosComponent},
  {path:"crear-proceso", component:CrearProcesoComponent},
  {path:"editar-proceso/:id", component:EditarProcesoComponent},  
  {path:"ver-proceso/:id", component:VerProcesoComponent},  
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
    EditarModalidadComponent,
    ProcesosComponent,
    CrearProcesoComponent,
    EditarProcesoComponent,
    VerModalidadComponent,
    VerProcesoComponent,
    CompaniasComponent,
    CrearCompaniaComponent,
    EditarCompaniaComponent,
    VerCompaniaComponent,
    FormadepagosComponent,
    CrearFormadepagoComponent,
    EditarFormadepagoComponent,
    VerFormadepagoComponent,
    ParametrosComponent,
    CrearParametroComponent,
    EditarParametroComponent,
    VerParametroComponent,
    TipocontratosComponent,
    CrearTipocontratoComponent,
    EditarTipocontratoComponent,
    VerTipocontratoComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    VerUsuarioComponent,
    GarantiasComponent,
    CrearGarantiaComponent,
    EditarGarantiaComponent,
    VerGarantiaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpModule,
    HttpClientModule,
    FormsModule,
    //NgbModule.forRoot()
  ],
  providers: [
  	Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
