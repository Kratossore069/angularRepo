import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/models/asistencia';
import { Estudiante } from 'src/app/models/estudiante';
import { AulaService } from 'src/app/servicio/aula.service';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {

  asistencia: Asistencia = new Asistencia();
  estudiante: Estudiante = new Estudiante();

  constructor(private servicio: AulaService) { }

  ngOnInit(): void {
  }

  enviarRegistro() {
    this.asistencia.estudiante = this.estudiante;
    this.servicio.registrarAsistencia(this.asistencia)
      .subscribe({
        next: response => {
          alert("Se registró con éxito");
        },
        error: error => {
          alert("No existe nadie con ese código");
        }
      })
  }
}

