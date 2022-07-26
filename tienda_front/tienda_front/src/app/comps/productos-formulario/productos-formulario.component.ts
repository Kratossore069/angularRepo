import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-productos-formulario',
  templateUrl: './productos-formulario.component.html',
  styleUrls: ['./productos-formulario.component.css']
})
export class ProductosFormularioComponent implements OnInit {

  producto: Producto = new Producto();

  categorias: Categoria[] = [];

  constructor(private servicio: ProductoService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  /**
   * RECIBE TODAS LAS CATEGORIAS DESDE EL SERVICIO
   */
  listarCategorias() {
    this.servicio.listarCategorias().subscribe(datos => {
      this.categorias = datos;
    })
  }

  /**
   * AGREGAR UN PRODUCTO AL SERVICIO
   */
  agregarProducto() {
    this.servicio.crearProducto(this.producto).subscribe(data => {
      alert("Producto añadido");
    })
  }

}
