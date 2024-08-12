import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, {
      email: email,
      password: password
    }).pipe(
      map((res: any) => {
        this.setToken(res.token)
        return res;
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
