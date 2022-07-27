import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/modelos/categoria';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-productos-formulario',
  templateUrl: './productos-formulario.component.html',
  styleUrls: ['./productos-formulario.component.css'],
})
export class ProductosFormularioComponent implements OnInit {
  producto: Producto = new Producto();

  categorias: Categoria[] = [];

  constructor(
    private servicio: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listarCategorias();
    //this.buscarIDProducto();
  }

  /**
   * FUNCION PARA BUSCAR EL ID DEL PRODUCTO
   * QUE SE QUIERE ACTUALIZAR
   */
  buscarIDProducto() {
    this.activatedRoute.params.subscribe((params) => {
      let id: number = params['id'];
      if (id) {
        this.servicio.obtenerProducto(id).subscribe((res) => {
          this.producto = res;
        });
      }
    });
  }

  /**
   * RECIBE TODAS LAS CATEGORIAS DESDE EL SERVICIO
   */
  listarCategorias() {
    this.servicio.listarCategorias().subscribe((datos) => {
      this.categorias = datos;
    });
  }

  /**
   * AGREGAR UN PRODUCTO AL SERVICIO
   */
  agregarProducto() {
    this.servicio.crearProducto(this.producto).subscribe((data) => {
      console.log("Agregado "+data);
    });
  }

  /**
   * ACTUALIZAR PRODUCTO DE LA TIENDA
   */
  actualizarProducto() {
    this.servicio.actualizarProducto(this.producto).subscribe(res => {
      console.log("Actualizado");
    })
  }
}
