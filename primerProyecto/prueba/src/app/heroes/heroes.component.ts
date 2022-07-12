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

  constructor(private heroService: HeroService) {}

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

  delete(hero: HeroInterfaz): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as HeroInterfaz)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
