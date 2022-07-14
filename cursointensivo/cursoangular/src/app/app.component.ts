import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nuevoMiembro: string = "";
  miembros: string[] = [];
  mensajeError: string = '';
  numeroEquipos: number | string = '';
  equipos: string[][] = []

  /**
   * MÉTODO QUE ENVÍA LOS MIEMBROS
   * INSERTADOS A LA LISTA
   * @param miembro nombre de la persona
   */
  onInput(miembro: string) {
    this.nuevoMiembro = miembro;
  }

  /**
   * METODO QUE CUENTA EL NÚMERO DE EQUIPOS
   * QUE SE QUIERE AÑADIR
   * @param value numero de equipos
   */
  aniadirEquipos(value: string) {
    this.numeroEquipos = Number(value);
  }

  /**
   * METODO QUE MONITORIZA CUANDO SE AÑADE UN NOMBRE AL REGISTRO
   * PARA ENVIARLO LUEGO A LA LISTA
   * @returns error si no está bien el nombre
   */
  aniadirMiembro() {
    if (!this.nuevoMiembro) {
      this.mensajeError = 'El nombre no puede estar vacío';
      return;
    }
    this.mensajeError = '';
    this.miembros.push(this.nuevoMiembro);
    this.nuevoMiembro = '';
  }

  /**
   * METODO QUE GENERA LOS EQUIPOS A PARTIR
   * DE LOS NOMBRES QUE SE ENCUENTRAN EN LA LISTA
   * @returns error si algo no va bien
   */
  generarEquipos() {
    if (!this.numeroEquipos || this.numeroEquipos <= 0) {
      this.mensajeError = 'Número inválido de equipos'
      return;
    }

    if (this.miembros.length < this.numeroEquipos) {
      this.mensajeError = 'No hay miembros suficientes'
      return;
    }

    this.mensajeError = ''
    let todosMiembros = [...this.miembros];
    while (todosMiembros.length) {
      for (let i = 0; i < this.numeroEquipos; i++) {
        let indexAleatorio = Math.floor(Math.random() * todosMiembros.length);
        let miembro = todosMiembros.splice(indexAleatorio, 1)[0];
        if (!miembro) break;
        if (this.equipos[i]) {
          this.equipos[i].push(miembro)
        } else {
          this.equipos[i] = [miembro]
        }
      }
    }
    this.miembros = []
    this.numeroEquipos = ''
  }
}
