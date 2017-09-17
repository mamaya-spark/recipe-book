import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../../_services/auth.service';
import {
  LOGIN_ACTION,
  LoginAction,
  LoginResponseAction,
  LoginErrorResponseAction,
  LOGOUT_ACTION,
  LogoutAction,
  LogoutResponseAction,
  LogoutErrorResponseAction,
} from '../actions/auth.actions';

import { LoginResponseData } from '../models/through/LoginResponseData';
import { LogoutResponseData } from '../models/through/LogoutResponseData';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffectService {
  constructor(
    private actions$: Actions,
    private _auth: AuthService,
  ){ }

  @Effect() login$: Observable<Action> = this.actions$
    .ofType(LOGIN_ACTION)
    .map((action: LoginAction) => action.payload)
    .mergeMap(payload =>
      this._auth
        .login(payload.userLogin)
        .map((res: LoginResponseData) => new LoginResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new LoginErrorResponseAction(err)))
    );

  @Effect() logout$: Observable<Action> = this.actions$
    .ofType(LOGOUT_ACTION)
    .map((action: LogoutAction) => action.payload)
    .mergeMap(payload =>
      this._auth
        .logout()
        .map((res: LogoutResponseData) => new LogoutResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new LogoutErrorResponseAction(err)))
    );
}
