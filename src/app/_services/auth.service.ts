import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LoginPostData } from '../_store/models/through/LoginPostData';
import { LoginResponseData } from '../_store/models/through/LoginResponseData';
import { LogoutResponseData } from '../_store/models/through/LogoutResponseData';

@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient,
  ) { }

  login(userLogin: LoginPostData): Observable<LoginResponseData> {
    return this._http.post(`/login`, userLogin);
  }

  logout(): Observable<LogoutResponseData> {
    return this._http.post(`/api/v1/logout`, { });
  }

}
