import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UserService } from '../../_services/user.service';
import {
  GET_USER_ME_ACTION,
  GetUserMeAction,
  GetUserMeResponseAction,
  GetUserMeErrorResponseAction,
} from '../actions/user.actions';

import { UserResponseData } from '../models/through/UserResponseData';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffectService {
  constructor(
    private actions$: Actions,
    private _user: UserService,
  ){ }

  @Effect() me$: Observable<Action> = this.actions$
    .ofType(GET_USER_ME_ACTION)
    .map((action: GetUserMeAction) => action.payload)
    .mergeMap(payload =>
      this._user
        .me()
        .map((res: UserResponseData) => new GetUserMeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new GetUserMeErrorResponseAction(err)))
    );
}
