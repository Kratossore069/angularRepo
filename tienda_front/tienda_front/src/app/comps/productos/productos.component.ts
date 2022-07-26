import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private servicio: ProductoService) { }

  ngOnInit(): void {
    this.recogerProductos();
  }

  /**
   * RECOGE LOS PRODUCTOS DEL SERVICIO
   * @returns 
   */
  recogerProductos() {
    return this.servicio.listarProductos().subscribe(datos => {
      this.productos = datos;
    })
  }

}
