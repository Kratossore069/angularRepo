import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { PokemonComponent } from './componentes/pokemon/pokemon.component';

const routes: Routes = [
  {path:'',component:PokemonComponent},
  {path:'lista',component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
