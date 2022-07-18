import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemClase } from '../clases/ItemClase';

@Injectable({
  providedIn: 'root',
})
export class ItemserviceService {
  url: string = 'http://localhost:3001/items';
  httpOptions={
    headers:{}
  };
  items: ItemClase[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 3,
      quantity: 4,
      completed: true,
    },
    {
      id: 1,
      title: 'Pera',
      price: 4,
      quantity: 10,
      completed: false,
    },
    {
      id: 2,
      title: 'Sandía',
      price: 5,
      quantity: 20,
      completed: true,
    },
  ];
  constructor(private http: HttpClient) {}

  getItems(): Observable<ItemClase[]> {
    return this.http.get<ItemClase[]>(this.url);
  }

  addItem(item: ItemClase):Observable<ItemClase> {
    return this.http.post<ItemClase>(this.url,item,this.httpOptions);
  }
}
