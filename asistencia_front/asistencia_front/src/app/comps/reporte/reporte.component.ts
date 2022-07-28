import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/models/asistencia';
import { Aula } from 'src/app/models/aula';
import { Estudiante } from 'src/app/models/estudiante';
import { AulaService } from 'src/app/servicio/aula.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  asistencias: Asistencia[] = [];
  aula!: Aula;

  constructor(private servicio: AulaService) { }

  ngOnInit(): void {
    this.obtenerAulaId(1);
  }

  obtenerAulaId(id: number) {
    return this.servicio.obtenerAulaId(id).subscribe(datos => {
      this.aula = datos;
      this.estudiantes = this.aula.estudiantes;
      this.buscarAsistencias();
    })
  }

  buscarAsistencias() {
    this.estudiantes.forEach((estudiante: Estudiante) => {
      this.servicio.buscarAsistenciaPorCodigo(estudiante.codigo)
        .subscribe({
          next: (asistencia: Asistencia) => {
            this.asistencias.push(asistencia);
          },
          error: err => {
            let nuevaAsistencia: Asistencia = new Asistencia();
            nuevaAsistencia.estudiante = estudiante;
            this.asistencias.push(nuevaAsistencia);
          }
        })
    })
  }

}
