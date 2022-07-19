import { Component, OnInit } from '@angular/core';
import { ServicioapiService } from 'src/app/servicio/servicioapi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  listaMonstruos: any[] = [];

  constructor(private servicio: ServicioapiService) {}

  ngOnInit(): void {
    this.getTodosPokemon();
  }

  getTodosPokemon() {
    this.servicio.getPokemon().subscribe((datos:any) => {
      this.listaMonstruos = datos.results;
    });
  }
}
