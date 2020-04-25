import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>
        <button (click)="decrement()">-</button>
        counter: {{ counter }}
        <button (click)="increment()">+</button>
      </p>
    </div>
  `,
})
export class CounterComponent {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}
