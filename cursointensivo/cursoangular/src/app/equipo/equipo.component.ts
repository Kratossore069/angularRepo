import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  @Input() equipo: string[] = [];
  @Input() index = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
