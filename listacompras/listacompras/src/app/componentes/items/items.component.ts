import { Component, OnInit } from '@angular/core';
import { ItemClase } from 'src/app/clases/ItemClase';
import { ItemserviceService } from 'src/app/servicios/itemservice.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: ItemClase[] = [];
  total: number = 0;

  constructor(private servicio: ItemserviceService) {}

  ngOnInit(): void {
    this.servicio.getItems().subscribe((data) => (this.items = data));
    this.totalPrecio();
  }

  deleteItem(item: ItemClase) {
    this.items = this.items.filter((x) => x.id != item.id);
    this.totalPrecio();
  }

  cambiarItem(item: ItemClase) {
    this.totalPrecio();
  }

  totalPrecio() {
    this.total = this.items
      .filter((x) => !x.completed)
      .map((x) => x.quantity * x.price)
      .reduce((acc, item) => (acc += item), 0);
  }
}
