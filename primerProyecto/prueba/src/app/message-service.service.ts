import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  messages: string[] = [];

  constructor() {}

  /**
   * MÉTODO QUE AÑADE UN MENSAJE A 
   * LA LISTA DE NOTICIAS
   * @param message mensaje de un cambio
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * MÉTODO QUE VACÍA LA LISTA DE MENSAJES
   */
  clear() {
    this.messages = [];
  }
}
