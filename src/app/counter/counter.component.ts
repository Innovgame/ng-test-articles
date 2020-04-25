import { Component, Inject } from '@angular/core';
import { Store, AppStore, AppStore2 } from '../ts/model';
import {
  incrementAction,
  decrementAction,
  decrement,
  increment,
} from '../counter/action';
import { Store as Store2 } from 'redux';
import { AppState } from '../ts/ng-redux';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>
        <button (click)="decrement()">-</button>
        counter: {{ counter }}
        <button (click)="increment()">+</button>
        <button (click)="scribe()">scribe</button>
        <button (click)="unscribe()">unscribe</button>
      </p>
    </div>
  `,
})
export class CounterComponent {
  counter: number;
  unscribeRef: () => void;

  constructor(
    @Inject(AppStore) private store: Store<number>,
    @Inject(AppStore2) private store2: Store2<AppState>
  ) {
    // this.counter = this.store.getState();
    // this.unscribeRef = this.store.subscribe(() => {
    //   this.counter = this.store.getState();
    // });

    this.counter = this.store2.getState().counter;
    this.unscribeRef = this.store2.subscribe(() => {
      this.counter = this.store2.getState().counter;
    });
  }

  decrement() {
    // this.store.dispatch(decrementAction);
    this.store2.dispatch(decrement());
  }

  increment() {
    // this.store.dispatch(incrementAction);
    this.store2.dispatch(increment());
  }

  unscribe(): void {
    if (this.unscribeRef) {
      this.unscribeRef();
      this.unscribeRef = null;
    }
  }

  scribe(): void {
    if (!this.unscribeRef) {
      this.unscribeRef = this.store2.subscribe(() => {
        this.counter = this.store2.getState().counter;
      });
    }
  }
}
