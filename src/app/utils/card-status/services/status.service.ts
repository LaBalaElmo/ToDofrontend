import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {TaskDTO} from "../../../dto/TaskDTO";
import {UpdateTaskDTO} from "../../../dto/UpdateTaskDTO";
import {CreateTaskDTO} from "../../../dto/CreateTaskDTO";
import {StatusDTO} from "../../../dto/StatusDTO";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient ) { }

  getTasksByStatus(statusId: string): Observable<TaskDTO[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this.http.get(`${this.url}/task/all-status/${statusId}`, {
      headers: headers
    }) as Observable<TaskDTO[]>;
  }

  updateTask(task: UpdateTaskDTO): Observable<TaskDTO> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    console.log("Updating", task)
    return this.http.put(`${this.url}/task/update`, task, {
      headers: headers
    }) as Observable<TaskDTO>;
  }

  deleteTask(id: string): Observable<number> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    console.log("Deleting", id)
    return this.http.delete<any>(`${this.url}/task/delete/${id}`, {
      headers: headers
    });
  }

  createTask(task: CreateTaskDTO): Observable<TaskDTO> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this.http.post(`${this.url}/task/create`, task, {
      headers: headers
    }) as Observable<TaskDTO>;
  }

  connectToStatus(id: string): Observable<TaskDTO> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this.http.post(`${this.url}/user-status/add`, {
      statusId: id
    }, {
      headers: headers
    }) as Observable<TaskDTO>;
  }

  createStatus(name: string): Observable<StatusDTO> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this.http.post(`${this.url}/status/create`, {
      name: name
    }, {
      headers: headers
    }) as Observable<StatusDTO>;
  }
}
