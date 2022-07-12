import { Component, OnInit } from '@angular/core';
import { HeroInterfaz } from '../interfaces/heroe';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: HeroInterfaz[] = [];

  constructor(private heroesServicio: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * MÉTODO QUE RECOGE LOS 5 PRIMEROS 
   * HÉROES DE UNA LISTA DEL MOCK
   */
  getHeroes(): void {
    this.heroesServicio
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
