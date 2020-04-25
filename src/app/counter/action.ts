import { Action } from '../ts/model';
import { DECREMENT, INCREMENT } from './constants';

export const incrementAction: Action = { type: INCREMENT };

export const decrementAction: Action = { type: DECREMENT };
