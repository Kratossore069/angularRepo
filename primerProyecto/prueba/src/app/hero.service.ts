import { Injectable } from '@angular/core';
import { HeroInterfaz } from './interfaces/heroe';
import { HEROESLISTA } from './mocks/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /**
   * FUNCION QUE DEVUELVE EL MOCK DE HEROES
   * @returns lista de héroes que viene de la interfaz
   */
  getHeroes(): Observable<HeroInterfaz[]> {
    const heroes = of(HEROESLISTA);
    return heroes;
  }
}
