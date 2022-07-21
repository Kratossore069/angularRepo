import { Component, HostBinding, OnInit } from '@angular/core';
import { JuegoInterfaz } from 'src/app/modelo/JuegoInterfaz';
import { JuegoService } from 'src/app/servicio/juego.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  listaJuegos: any[] = []

  constructor(private servicio: JuegoService) { }

  ngOnInit(): void {
    this.listarJuegos();
  }

  listarJuegos() {
    return this.servicio.getGames().subscribe((datos: any) => {
      this.listaJuegos = datos;
    })
  }

  eliminarJuego(id: string) {
    Swal.fire({
      title: '¿Seguro que quieres eliminar el juego?',
      text: "Los cambios no se podrán revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Juego borrado de la base de datos',
          'success'
        );
        this.servicio.deleteGame(id).subscribe(() => {
          this.listarJuegos();
        })
      }
    })
  }
}
