import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioJuegosComponent } from './componentes/formulario-juegos/formulario-juegos.component';
import { ListaJuegosComponent } from './componentes/lista-juegos/lista-juegos.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: ListaJuegosComponent },
  { path: 'games/add', component: FormularioJuegosComponent },
  { path: 'games/edit/:id', component: FormularioJuegosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
