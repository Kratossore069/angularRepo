import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosFormularioComponent } from './comps/productos-formulario/productos-formulario.component';
import { ProductosComponent } from './comps/productos/productos.component';

const routes: Routes = [
  { path: "", component: ProductosComponent },
  { path: "formulario", component: ProductosFormularioComponent },
  { path: "formulario/:id", component: ProductosFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
