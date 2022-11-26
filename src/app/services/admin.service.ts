import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAdminAnswer } from '../models/admin-answer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  getAnswers(): Observable<IAdminAnswer[]> {
    const resp = this.http.get<IAdminAnswer[]>(`${environment.backUrl}/quiz/get-answers`);
    return resp;
  }
}
