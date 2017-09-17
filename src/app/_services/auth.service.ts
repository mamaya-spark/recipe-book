import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient,
  ) { }

  login(postData: any): Observable<any> {
    return this._http.post(`/login`, postData);
  }

  logout(): Observable<any> {
    return this._http.post(`/api/v1/logout`, { });
  }

}
