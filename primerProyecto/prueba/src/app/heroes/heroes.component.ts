import { Component, OnInit } from '@angular/core';
import { HeroInterfaz } from '../interfaces/heroe';
import { HeroService } from '../hero.service';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: HeroInterfaz[] = [];
  selectedHero?: HeroInterfaz;

  constructor(private heroService: HeroService,
    private messageService:MessageServiceService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: HeroInterfaz): void {
    this.selectedHero = hero;
    this.messageService.add("Héroe seleccionado: "+hero.nombre);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
