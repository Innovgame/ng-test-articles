import { Action, ActionCreator } from 'redux';
import { Action as Action2 } from '../ts/model';
import { DECREMENT, INCREMENT } from './constants';

export const incrementAction: Action2 = { type: INCREMENT };

export const decrementAction: Action2 = { type: DECREMENT };

export const increment: ActionCreator<Action<any>> = () => ({
  type: INCREMENT,
});
export const decrement: ActionCreator<Action<any>> = () => ({
  type: DECREMENT,
});
