import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/servicio/empleado.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private servicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  /**
   * OBTENER EMPLEADOS DESDE EL SERVICIO
   */
  obtenerEmpleados() {
    this.servicio.obtenerEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }

  updateEmpleado(id: number) {
    this.router.navigate(["actualizar", id]);
  }

  /**
   * ELIMINAR UN EMPLEADO DE LA BASE DE DATOS
   * @param id del empleado
   */
  eliminarEmpleado(id: number) {
    this.servicio.borrarEmpleado(id).subscribe(dato => {
      this.obtenerEmpleados();
    })
  }

  /**
   * VER DETALLES DEL EMPLEADO SELECCIONADO
   * @param id del empleado
   */
  verDetalles(id: number) {
    this.router.navigate(["detalles", id]);
  }

}
