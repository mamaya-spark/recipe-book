import { Action } from '@ngrx/store';

export const GET_USER_ME_ACTION = 'GET_USER_ME_ACTION';
export const GET_USER_ME_RESPONSE_ACTION = 'GET_USER_ME_RESPONSE_ACTION';
export const GET_USER_ME_ERROR_RESPONSE_ACTION = 'GET_USER_ME_ERROR_RESPONSE_ACTION';

export class GetUserMeAction implements Action {
  readonly type = GET_USER_ME_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class GetUserMeResponseAction implements Action {
  readonly type = GET_USER_ME_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class GetUserMeErrorResponseAction implements Action {
  readonly type = GET_USER_ME_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}
