import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemClase } from 'src/app/clases/ItemClase';
import { ItemserviceService } from 'src/app/servicios/itemservice.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent implements OnInit {
  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(
    private itemService: ItemserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  enviarArticulo() {
    const nuevoItem = new ItemClase();
    nuevoItem.id = this.id;
    nuevoItem.title = this.title;
    nuevoItem.price = this.price;
    nuevoItem.quantity = this.quantity;
    nuevoItem.completed = false;

    this.itemService.addItem(nuevoItem).subscribe((item) => {
      this.router.navigate(['/']);
    });
  }
}
