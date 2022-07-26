import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../modelos/categoria';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url: string = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

  /**
   * RECIBE LOS PRODUCTOS DESDE EL BACK
   * @returns
   */
  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/listar');
  }

  /**
   * RECIBE LAS CATEGORIAS DESDE EL BACK
   * @returns
   */
  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url + '/categorias');
  }

  /**
   * AGREGAR UN PRODUCTO NUEVO AL BACK
   * @param producto
   * @returns
   */
  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url + '/listar', producto);
  }

  /**
   * ACTUALIZA UN PRODUCTO DESDE EL BACK
   * @param producto
   * @returns
   */
  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(
      this.url + '/listar/' + producto.id,
      producto
    );
  }

  /**
   * FUNCION UTILIZADA PARA ACTUALIZAR EL PRODUCTO 
   * DEL INVENTARIO
   * @param id 
   * @returns 
   */
  obtenerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + '/' + id);
  }
}
