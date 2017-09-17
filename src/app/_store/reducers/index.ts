import { ActionReducerMap, ActionReducer } from '@ngrx/store';
import { ApplicationState } from '../app-state';
import { routerReducer } from '@ngrx/router-store';
import { storeReducer } from './store.reducer';
import { storeLogger } from 'ngrx-store-logger';

export const rootReducer: ActionReducerMap<ApplicationState> = {
  store: storeReducer,
  router: routerReducer,
}

export function logger(reducer: ActionReducer<ApplicationState>): any {
  return storeLogger()(reducer);
}
