import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProject } from "../models/project";
import { environment } from "src/environments/environment";

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProject[]> {
    const resp = this.http.get<IProject[]>(`${environment.backUrl}/vacancy/find`);
    return resp;
  }

  getVacancy(id:string): Observable<IProject[]> {
    const resp = this.http.get<IProject[]>(
      `${environment.backUrl}/vacancy/find`, {
        params: {
          id: id
        }
      }
    );
    return resp;
  }
}