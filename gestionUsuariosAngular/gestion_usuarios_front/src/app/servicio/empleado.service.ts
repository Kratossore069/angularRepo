import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseURL = "http://localhost:8080/api/empleados";

  constructor(private http: HttpClient) { }

  /**
   * OBTENER LOS EMPLEADOS DESDE LA API
   * DEL BACK
   * @returns lista de empleados registrados 
   */
  obtenerEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.baseURL);
  }

  /**
   * REGISTRAR UN EMPLEADO NUEVO EN LA PLATAFORMA
   * @param empleado nuevo
   * @returns empleado creado
   */
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.http.post(this.baseURL, empleado);
  }

  /**
   * ACTUALIZA EL EMPLEADO QUE ESTÁ REGISTRADO EN EL BACK
   * @param id 
   * @param empleado 
   * @returns empleado cambiado
   */
  updateEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.http.put(this.baseURL + id, empleado);
  }

  obtenerEmpleadoId(id: number):Observable<Empleado> {
    return this.http.get<Empleado>(this.baseURL + "/" + id);
  }

  /**
   * BORRA UN EMPLEADO DE LA BASE DE DATOS
   * @param id 
   * @returns empleado borrado
   */
  borrarEmpleado(id: number): Observable<Object> {
    return this.http.delete(this.baseURL + "/" + id);
  }
}
