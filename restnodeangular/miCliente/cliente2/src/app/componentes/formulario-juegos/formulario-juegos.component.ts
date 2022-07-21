import { Component, HostBinding, OnInit } from '@angular/core';
import { JuegoInterfaz } from 'src/app/modelo/JuegoInterfaz';
import { JuegoService } from 'src/app/servicio/juego.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-juegos',
  templateUrl: './formulario-juegos.component.html',
  styleUrls: ['./formulario-juegos.component.css']
})
export class FormularioJuegosComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  juego: JuegoInterfaz = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit:boolean=false

  constructor(private servicio: JuegoService, private route: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.editarGuardar();
  }

  editarGuardar() {
    const params = this.activeRouter.snapshot.params;
    if (params["id"]) {
      this.servicio.getGame(params["id"]).subscribe((res: any) => {
        this.juego = res
        this.edit=true
      }, error => {
        console.log(error)
      })
    }
  }

  updateJuego(){
    this.servicio.updateGame(this.juego.id, this.juego)
      .subscribe(
        res => { 
          Swal.fire(
            'Mensaje del sistema',
            'Juego actualizado con éxito',
            'success'
          )
          this.route.navigate(['/games']);
        },
        err => console.error(err)
      )
  }

  guardarJuego() {
    this.servicio.saveGame(this.juego).subscribe(() => {
      Swal.fire(
        'Mensaje del sistema',
        'Juego añadido con éxito',
        'success'
      )
      this.route.navigate(['/'])
    });
  }

}
