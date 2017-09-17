import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient,
  ) { }

  me(): Observable<any> {
    return this._http.get(`/api/v1/user/me`);
  }

}
