import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroInterfaz } from '../interfaces/heroe';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<HeroInterfaz[]>;
  private searchTerms = new Subject<string>();

  constructor(private servicioHeroe: HeroService) {}

  /**
   * MÉTODO QUE BUSCA POR UN TÉRMINO
   * A UN HÉROE EN CONCRETO
   * @param term texto a buscar
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // Espera 300ms después de cada tecla pulsada antes de 
      // buscar todo el texto
      debounceTime(300),

      // Ignora la nueva letra si es la misma que la anterior
      distinctUntilChanged(),

      // Cambia a una nueva búsqueda observable cada vez que cambia el término
      switchMap((term: string) => this.servicioHeroe.searchHeroes(term))
    );
  }
}
