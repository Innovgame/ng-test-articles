import { Reducer, Action } from '../ts/model';
import { INCREMENT, DECREMENT } from './constants';
import { AppState } from '../ts/ng-redux';
export const counterReducer: Reducer<number> = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const initalState: AppState = { counter: 0 };

export const counterReducer2: Reducer<AppState> = (
  state: AppState = initalState,
  action: Action
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};
