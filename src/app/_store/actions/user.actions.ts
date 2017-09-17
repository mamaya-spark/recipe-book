import { Action } from '@ngrx/store';

import { UserResponseData } from '../models/through/UserResponseData';
import { HttpErrorResponse } from '@angular/common/http';

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
    public payload: UserResponseData
  ){ }
}

export class GetUserMeErrorResponseAction implements Action {
  readonly type = GET_USER_ME_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}
