import { createStore, Store, StoreEnhancer } from 'redux';

import { counterReducer2 } from '../counter/reducer';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface AppState {
  counter: number;
}

const devtools: StoreEnhancer<AppState> = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f) => f;

export const store: Store = createStore(counterReducer2, devtools);
