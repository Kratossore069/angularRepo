import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Food } from './modelos/food';
import { Snake } from './modelos/snake';
import { outsideGrid } from './modelos/plantillatablero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title:string = 'Juego de Snake';
  gameBoard: any;
  snake = new Snake();
  food = new Food(this.snake);


  lastRenderTime = 0
  gameOver = false

  ngAfterViewInit() {
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }

  /**
   * BOTÓN DE REINICIAR LA PARTIDA
   */
  reiniciarJuego() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.snake.listenToInputs();
  }

  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }


  start(currentTime: any) {
    if (this.gameOver) {
      return console.log('Juego terminado');
    }

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / this.snakeSpeed) {
      return;
    }
    this.lastRenderTime = currentTime;

    this.update();
    this.draw();
  }

  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }

  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }


  get snakeSpeed() {
    const score = this.food.currentScore;
    if (score < 10) {
      return 4;
    }
    if (score > 10 && score < 15) {
      return 5;
    }
    if (score > 15 && score < 20) {
      return 6;
    }
    return 7;
  }

}