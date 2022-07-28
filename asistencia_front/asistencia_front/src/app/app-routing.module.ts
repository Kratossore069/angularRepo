import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAsistenciaComponent } from './comps/registrar-asistencia/registrar-asistencia.component';
import { RegistrarSalidaComponent } from './comps/registrar-salida/registrar-salida.component';
import { ReporteComponent } from './comps/reporte/reporte.component';

const routes: Routes = [
  { path: "", component: ReporteComponent },
  { path: "registro-asistencia", component: RegistrarAsistenciaComponent },
  { path: "registro-salida", component: RegistrarSalidaComponent },
  { path: "reporte", component: ReporteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
