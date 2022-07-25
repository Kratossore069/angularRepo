import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/servicio/empleado.service';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})
export class UpdateEmpleadoComponent implements OnInit {

  empleadoEncontrado: Empleado = new Empleado();
  id: number = 0;

  constructor(private route: ActivatedRoute, private servicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.encontrarEmpleado();
  }

  /**
   * ACTUALIZAR UN USUARIO EN LA PLATAFORMA
   */
  enviarFormulario() {
    this.servicio.registrarEmpleado(this.empleadoEncontrado).subscribe(datos => {
      this.router.navigate(["/empleados"]);
    })
  }

  /**
   * MÉTODO PARA RECOGER EL EMPLEADO
   * QUE SE VA A ACTUALIZAR
   */
  encontrarEmpleado() {
    this.id = this.route.snapshot.params['id'];
    this.servicio.obtenerEmpleadoId(this.id).subscribe(dato => {
      this.empleadoEncontrado = dato;
    })
  }
}
