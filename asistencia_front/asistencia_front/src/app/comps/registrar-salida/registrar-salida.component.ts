import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/models/asistencia';
import { Estudiante } from 'src/app/models/estudiante';
import { AulaService } from 'src/app/servicio/aula.service';

@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.css']
})
export class RegistrarSalidaComponent implements OnInit {

  asistencia: Asistencia = new Asistencia();
  estudiante: Estudiante = new Estudiante();

  constructor(private servicio: AulaService) { }

  ngOnInit(): void {
  }

  enviarSalida() {
    this.asistencia.estudiante = this.estudiante;
    this.servicio.registrarSalida(this.asistencia)
      .subscribe({
        next: response => {
          alert("Se registró la salida");
        },
        error: error => {
          alert("Error al registrar la salida");
        }
      })
  }

}
