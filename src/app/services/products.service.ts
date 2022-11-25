import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IProduct } from "../models/products";
import { Observable } from "rxjs";
import { IContactInfo } from "../models/contactInfo";
const axios = require('axios').default;

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    const resp = this.http.get<IProduct[]>('https://fakestoreapi.com/products');
    return resp;
  }

  setContactInfo(contactInfo: IContactInfo): Observable<IContactInfo>{
    const url = "http://10.131.56.194:3002/api/v1/user/set-contact-info"
    console.log(contactInfo);

    const body = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  }

  const resp = this.http.post<IContactInfo>(url, contactInfo);
  // const resp = this.http.get('https://fakestoreapi.com/products');
  // return resp;
  // const resp = this.http.post<IContactInfo>('https://fakestoreapi.com/products', body);

    // axios.post(url, contactInfo, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // .then((response: any) => {
    //   console.log(response);
    // })
    // .catch(function (error: any) {
    //   console.log(error);
    // });
    console.log(resp);
    return resp;
  }
}