import { Categoria } from "./categoria";

export class Producto {
    id: number = 0;
    nombre: string = '';
    precio: number = 0;
    imagen: string = '';
    categoria: Categoria = new Categoria();
}
