import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './componentes/additem/additem.component';
import { ItemsComponent } from './componentes/items/items.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'add', component: AdditemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
