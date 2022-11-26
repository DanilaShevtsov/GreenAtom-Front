import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAdminAnswer } from '../models/admin-answer';
import { IAuth } from '../models/auth';
import { ICreateVacancy } from '../models/create-vacancy';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  getAnswers(): Observable<IAdminAnswer[]> {
    const resp = this.http.get<IAdminAnswer[]>(`${environment.backUrl}/quiz/get-answers`);
    return resp;
  }

  createVacancy(body: ICreateVacancy, jwt:string): Observable<ICreateVacancy> {
    const resp = this.http.post<ICreateVacancy>(`${environment.backUrl}/vacancy/store`, body, {
      headers: {
        Authorization: 'Bearer ' + jwt
      }
    });
    return resp;
  }
  
  auth(body: IAuth): Observable<any> {
    const resp = this.http.post<any>(`${environment.backUrl}/admin/login`, body);
    return resp;
  }
}
