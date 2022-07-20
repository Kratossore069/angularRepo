import { Component, OnInit } from '@angular/core';
import { HeroInterfaz } from '../interfaces/heroe';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: HeroInterfaz[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * MÉTODO PARA RECOGER DEL SERVICIO
   * LA LISTA DE HÉROES
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  /**
   * MÉTODO PARA ELIMINAR UN HÉROE
   * DE LA LISTA
   * @param hero héroe a eliminar
   */
  delete(hero: HeroInterfaz): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  /**
   * MÉTODO QUE AÑADE UN NUEVO HÉROE
   * @param name nombre del nuevo héroe añadido
   * @returns nada si no hay campo nombre adecuado
   */
  add(name: string): void {
    let nombre = name.trim();
    if (!nombre) { return; }
    //const heroe:HeroInterfaz={id:2,nombre:name};
    this.heroService.addHero({nombre} as HeroInterfaz)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
