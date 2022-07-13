import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const RUTAS: Routes = [
  { path: "", component: MainComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(RUTAS)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
