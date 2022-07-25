import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoDetallesComponent } from './componentes/empleado-detalles/empleado-detalles.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { RegistrarEmpleadoComponent } from './componentes/registrar-empleado/registrar-empleado.component';
import { UpdateEmpleadoComponent } from './componentes/update-empleado/update-empleado.component';

const routes: Routes = [
  { path: 'empleados', component: ListaUsuariosComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'registrar', component: RegistrarEmpleadoComponent },
  { path: 'actualizar/:id', component: UpdateEmpleadoComponent },
  { path: 'detalles/:id', component: EmpleadoDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
