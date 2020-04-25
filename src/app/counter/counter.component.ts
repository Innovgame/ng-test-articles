import { Component, Inject } from '@angular/core';
import { Store, AppStore } from '../ts/model';
import { incrementAction, decrementAction } from '../counter/action';

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
  unscribeRef: () => void;

  constructor(@Inject(AppStore) private store: Store<number>) {
    this.counter = this.store.getState();
    this.unscribeRef = this.store.subscribe(() => {
      this.counter = this.store.getState();
    });
  }

  decrement() {
    this.store.dispatch(decrementAction);
    this.unscribeRef();
  }

  increment() {
    this.store.dispatch(incrementAction);
  }
}
