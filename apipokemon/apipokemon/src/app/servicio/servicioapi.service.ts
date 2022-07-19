import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioapiService {

  urlApi:string='https://pokeapi.co/api/v2/pokemon/'

  constructor(private http:HttpClient) { }

  /**
   * FUNCION QUE RECOGE LOS POKEMON 
   * DESDE UNA API EXTERNA
   * @returns lista de pokemon desde la api
   */
  getPokemon():Observable<any[]>{
    return this.http.get<any[]>(this.urlApi);
  }

  /**
   * FUNCION QUE RETORNA EL POKEMON
   * POR EL NOMBRE DEL CAMPO
   * @param nombre del monstruo
   * @returns info del monstruo
   */
  getPokemonPorNombre(nombre:string):Observable<any[]>{
    return this.http.get<any[]>(this.urlApi+nombre);
  }
}
