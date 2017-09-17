import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UserResponseData } from '../_store/models/through/UserResponseData';

@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient,
  ) { }

  me(): Observable<UserResponseData> {
    return this._http.get(`/api/v1/user/me`);
  }

}
