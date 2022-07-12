import { Component, OnInit, Input } from '@angular/core';
import { HeroInterfaz } from '../interfaces/heroe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {

  hero:HeroInterfaz|undefined;

  constructor(
    private route: ActivatedRoute,
    private servicioHeroes: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  /**
   * MÉTODO QUE RECOGE EL ID POR
   * PARÁMETRO DE LA URL DE UN HÉROE
   * Y LO MUESTRA
   */
  getHero(): void {
    const ID = Number(this.route.snapshot.paramMap.get('id'));
    this.servicioHeroes.getHero(ID).subscribe((hero) => (this.hero = hero));
  }

  /**
   * MÉTODO PARA VOLVER ATRÁS
   */
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.servicioHeroes.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
