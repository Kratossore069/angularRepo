import { Component, OnInit, Input } from '@angular/core';
import { HeroInterfaz } from '../interfaces/heroe';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: HeroInterfaz;

  constructor() { }

  ngOnInit(): void {
  }

}
