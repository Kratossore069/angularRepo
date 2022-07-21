import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JuegoInterfaz } from '../modelo/JuegoInterfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  url: string = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(this.url + '/games')
  }

  getGame(id: string) {
    return this.http.get(this.url + '/games/' + id)
  }

  deleteGame(id: string):Observable<any> {
    return this.http.delete(this.url + '/games/' + id)
  }

  saveGame(game: JuegoInterfaz) {
    return this.http.post(this.url + '/games', game)
  }

  updateGame(id: string|number|undefined, juegoActualizado: JuegoInterfaz): Observable<JuegoInterfaz> {
    return this.http.put<JuegoInterfaz>(this.url + '/games/' + id, juegoActualizado);
  }
}
