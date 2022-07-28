import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistencia } from '../models/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  urlBack: string = "http://localhost:8080/api/aulas";

  constructor(private http: HttpClient) { }

  /**
   * DEVUELVE EL AULA ENCONTRADA POR ID
   * @param id 
   * @returns 
   */
  obtenerAulaId(id: number): Observable<any> {
    return this.http.get<any>(this.urlBack + "/buscar-aula/" + id);
  }

  /**
   * REGISTRA UNA ASISTENCIA EN EL BACK
   * @param asistencia 
   * @returns 
   */
  registrarAsistencia(asistencia: Asistencia): Observable<any> {
    return this.http.post<any>(this.urlBack + "/registrar-asistencia", asistencia);
  }

  registrarSalida(asistencia: Asistencia): Observable<any> {
    return this.http.put<any>(this.urlBack + "/registrar-salida", asistencia);
  }

  buscarAsistenciaPorCodigo(codigo: string): Observable<any> {
    return this.http.get<any>(this.urlBack + "/buscar-asistencia/" + codigo);
  }
}
