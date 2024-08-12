import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  register(username: string,email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/user/register`, {
      username: username,
      email: email,
      password: password
    })
  }


}
