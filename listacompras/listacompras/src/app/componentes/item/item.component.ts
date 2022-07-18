import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemClase } from 'src/app/clases/ItemClase';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() objetos: ItemClase = new ItemClase();
  @Output() deleteItem: EventEmitter<ItemClase> = new EventEmitter();
  @Output() cambiarItem: EventEmitter<ItemClase> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  eliminar(objetos: ItemClase) {
    this.deleteItem.emit(objetos);
  }

  cambiar(item:ItemClase){
    item.completed = !item.completed;
    this.cambiarItem.emit(item);
  }
}
