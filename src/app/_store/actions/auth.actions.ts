import { Action } from '@ngrx/store';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGIN_RESPONSE_ACTION = 'LOGIN_RESPONSE_ACTION';
export const LOGIN_ERROR_RESPONSE_ACTION = 'LOGIN_ERROR_RESPONSE_ACTION';

export class LoginAction implements Action {
  readonly type = LOGIN_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class LoginResponseAction implements Action {
  readonly type = LOGIN_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class LoginErrorResponseAction implements Action {
  readonly type = LOGIN_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const LOGOUT_RESPONSE_ACTION = 'LOGOUT_RESPONSE_ACTION';
export const LOGOUT_ERROR_RESPONSE_ACTION = 'LOGOUT_ERROR_RESPONSE_ACTION';

export class LogoutAction implements Action {
  readonly type = LOGOUT_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class LogoutResponseAction implements Action {
  readonly type = LOGOUT_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class LogoutErrorResponseAction implements Action {
  readonly type = LOGOUT_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}
