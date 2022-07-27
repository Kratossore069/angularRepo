import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private servicio: ProductoService, private router: Router) { }

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

  /**
   * ELIMINA UN PRODUCTO DEL SERVICIO
   * @param id 
   * @returns 
   */
  eliminarProducto(id: number) {
    return this.servicio.borrarProducto(id).subscribe(res => {
      this.productos = this.productos.filter(producto => producto.id != id);
    })
  }

}
