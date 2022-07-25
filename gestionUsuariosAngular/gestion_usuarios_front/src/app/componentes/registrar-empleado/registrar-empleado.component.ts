import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/servicio/empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(private servicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * REGISTRAR UN NUEVO EMPLEADO EN LA PLATAFORMA
   */
  enviarFormulario() {
    this.servicio.registrarEmpleado(this.empleado).subscribe(datos => {
      this.router.navigate(["/empleados"]);
    })
  }

}
