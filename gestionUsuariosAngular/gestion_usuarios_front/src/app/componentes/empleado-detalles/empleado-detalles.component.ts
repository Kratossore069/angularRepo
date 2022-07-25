import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/servicio/empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id: number = 0;
  empleado: Empleado = new Empleado();

  constructor(private route: ActivatedRoute, private servicio: EmpleadoService) { }

  ngOnInit(): void {
    this.encontrarIdEmpleado();
  }

  encontrarIdEmpleado() {
    this.id = this.route.snapshot.params['id'];
    this.servicio.obtenerEmpleadoId(this.id).subscribe(dato => {
      this.empleado = dato;
    })
  }

}
