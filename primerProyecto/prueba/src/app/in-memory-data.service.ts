import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HeroInterfaz } from './interfaces/heroe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  /**
   * FUNCIÓN QUE CREA UNA 'BASE DE DATOS'
   * DE MUCHOS HÉROES
   * @returns lista de héroes
   */
  createDb() {
    const heroes = [
      { id: 12, name: 'La Cosa' },
      { id: 13, name: 'Batman' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'Lobezno' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'WonderWoman' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Spiderman' },
      { id: 20, name: 'Tornado' },
    ];
    return { heroes };
  }
  /**
   * Un héroe siempre debe tener un id.
   * Si la lista de héroes está vacía
   * se devuelve el número inicial de héroes que es 11
   * if the heroes array is not empty, the method below returns the highest
   * si la lista no está vacía, entonces devuelve el héroe con
   * el id más alto +1
   * @returns 11 ó el id más alto +1
   */
  genId(heroes: HeroInterfaz[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
