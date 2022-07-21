import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormularioJuegosComponent } from './componentes/formulario-juegos/formulario-juegos.component';
import { ListaJuegosComponent } from './componentes/lista-juegos/lista-juegos.component';

import { JuegoService } from './servicio/juego.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormularioJuegosComponent,
    ListaJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
