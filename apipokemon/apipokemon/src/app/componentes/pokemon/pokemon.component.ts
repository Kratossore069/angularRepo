import { Component, OnInit } from '@angular/core';
import { ServicioapiService } from 'src/app/servicio/servicioapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  listaPokemon: any[] = [];
  nombre: string = '';
  imagen: string = '';
  tipo: string = '';

  constructor(private servicio: ServicioapiService) {}

  ngOnInit(): void {}

  /**
   * MÉTODO QUE RECOGE EL NOMBRE QUE SE
   * QUIERE MOSTRAR Y SUS DATOS
   */
  getPokemonNombre() {
    this.servicio
      .getPokemonPorNombre(this.nombre.toLowerCase())
      .subscribe((datos: any) => {
        console.log(datos);
        this.imagen = datos.sprites.front_default;
        this.tipo = datos.types[0].type.name;
      });
  }
}
