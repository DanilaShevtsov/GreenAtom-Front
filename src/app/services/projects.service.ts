import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProject } from "../models/project";

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProject[]> {
    const resp = this.http.get<IProject[]>('http://10.131.56.194:3006/api/v1/vacancy/find');
    console.log(resp);
    return resp;
  }
}