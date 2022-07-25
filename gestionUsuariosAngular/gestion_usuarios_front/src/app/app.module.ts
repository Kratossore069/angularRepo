import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistrarEmpleadoComponent } from './componentes/registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpleadoComponent } from './componentes/update-empleado/update-empleado.component';
import { EmpleadoDetallesComponent } from './componentes/empleado-detalles/empleado-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    NavbarComponent,
    RegistrarEmpleadoComponent,
    UpdateEmpleadoComponent,
    EmpleadoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
