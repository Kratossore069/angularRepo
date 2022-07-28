import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { RegistrarAsistenciaComponent } from './comps/registrar-asistencia/registrar-asistencia.component';
import { RegistrarSalidaComponent } from './comps/registrar-salida/registrar-salida.component';
import { ReporteComponent } from './comps/reporte/reporte.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarAsistenciaComponent,
    RegistrarSalidaComponent,
    ReporteComponent
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
