import { StoreReducerState, INITIAL_STORE_REDUCER_STATE } from '../app-state';
import { Action } from '@ngrx/store';

export function storeReducer(state: StoreReducerState = INITIAL_STORE_REDUCER_STATE, action: Action ): StoreReducerState {
  let newState = Object.assign({ }, state);

  switch(action.type) {
    default:
      return newState;
  }
}
