import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from '../models/question';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { IAnswer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getAll(vanacyId: string): Observable<IQuestion[]> {
    const resp = this.http.get<IQuestion[]>(`${environment.backUrl}/quiz/get-questions`, {
      params: {
        vacancyId: vanacyId
      }
    });
    return resp;
  }

  sendAnswer(body: IAnswer): Observable<IAnswer> {
    const url = environment.backUrl + "/quiz/send-answers";
    const resp = this.http.post<IAnswer>(url, body);
    return resp;
  }
}
