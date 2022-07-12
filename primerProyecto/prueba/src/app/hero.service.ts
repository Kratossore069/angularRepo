import { Injectable } from '@angular/core';
import { HeroInterfaz } from './interfaces/heroe';
import { Observable, of } from 'rxjs';
import { MessageServiceService } from './message-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messageService: MessageServiceService,
    private http: HttpClient
  ) {}

  /**
   * FUNCION QUE DEVUELVE EL HEROES DEL SERVIDOR
   * @returns lista de héroes que viene del servidor
   */
  getHeroes(): Observable<HeroInterfaz[]> {
    return this.http.get<HeroInterfaz[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<HeroInterfaz[]>('getHeroes', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<HeroInterfaz> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<HeroInterfaz>(url).pipe(
      tap((_) => this.log(`Héroe registrado id=${id}`)),
      catchError(this.handleError<HeroInterfaz>(`Héroe conseguido id=${id}`))
    );
  }

  /**
   * MÉTODO QUE CREA UN MENSAJE Y LO AÑADE
   * @param message de cualquier tipo
   */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: HeroInterfaz): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`Héroe actualizado id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<HeroInterfaz[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http
      .get<HeroInterfaz[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`found heroes matching "${term}"`)
            : this.log(`no heroes matching "${term}"`)
        ),
        catchError(this.handleError<HeroInterfaz[]>('searchHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<HeroInterfaz> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<HeroInterfaz[]>(url).pipe(
      map((heroes) => heroes[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<HeroInterfaz>(`getHero id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: HeroInterfaz): Observable<HeroInterfaz> {
    return this.http
      .post<HeroInterfaz>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: HeroInterfaz) =>
          this.log(`Héroe añadido con id=${newHero.id}`)
        ),
        catchError(this.handleError<HeroInterfaz>('addHero'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<HeroInterfaz> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<HeroInterfaz>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<HeroInterfaz>('deleteHero'))
    );
  }

  /**
   * FUNCIÓN QUE REGISTRA LOS
   * ERRORES QUE PUEDA HABER EN LA API
   * @param operation
   * @param result
   * @returns
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
