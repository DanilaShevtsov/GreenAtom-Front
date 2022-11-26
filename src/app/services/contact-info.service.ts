import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IContactInfo } from "../models/contactInfo";
import { environment } from "src/environments/environment";

@Injectable()
export class ContactInfoService {
  constructor(private http: HttpClient) {}

  setContactInfo(contactInfo: IContactInfo){
    const url = environment.backUrl + "/user/set-contact-info"

    const resp = this.http.post(url, contactInfo, {
      responseType: "text"
    });
    return resp;
  }
}