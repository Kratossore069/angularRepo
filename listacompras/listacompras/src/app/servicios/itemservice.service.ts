import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemClase } from '../clases/ItemClase';

@Injectable({
  providedIn: 'root',
})
export class ItemserviceService {
  url: string = 'http://localhost:3001/items/';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    }
  };
  constructor(private http: HttpClient) {}

  getItems(): Observable<ItemClase[]> {
    return this.http.get<ItemClase[]>(this.url);
  }

  addItem(item: ItemClase): Observable<ItemClase> {
    return this.http.post<ItemClase>(this.url, item, this.httpOptions);
  }

  toggleItem(item: ItemClase): Observable<ItemClase> {
    return this.http.put<ItemClase>(this.url + item.id, item, this.httpOptions);
  }

  delete(item: ItemClase): Observable<ItemClase> {
    return this.http.delete<ItemClase>(this.url + item.id);
  }
}
