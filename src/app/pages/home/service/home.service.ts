import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {StatusDTO} from "../../../dto/StatusDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllStatuses(): Observable<StatusDTO[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this.http.get(`${this.url}/user-status/all`, {
      headers: headers
    }) as Observable<StatusDTO[]>;
  }
}
