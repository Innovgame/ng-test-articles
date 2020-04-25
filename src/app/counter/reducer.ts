import { Reducer } from '../ts/model';
import { INCREMENT, DECREMENT } from './constants';
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
