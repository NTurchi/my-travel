import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUri = 'http://monapi.com/';

  constructor(private http: HttpClient) { }

  doRequest<T>(uri: string, method: string, bearer?: string, body?: any, pathParams?: { [key: string]: string }): Observable<T> {
    const header = {};
    if (bearer) {
      header['Authorization'] =  `Bearer ${bearer}`;
    }
    const uriReq = this.baseUri + this.baseUri + uri;
    if (pathParams) {
      const firstKey = true;
      Object.keys(pathParams).forEach((key) => {
        if (firstKey) { uri += `?`; } else { uri += uri + '&'; }
        uri += `${key}=${pathParams[key]}`;
      });
    }
    console.log(`Request ${method} | uri : ${uri} | body : ${JSON.stringify(body)} | header : ${JSON.stringify(header)}`, [header]);
    switch (method) {
      case 'POST':
        return this.http.post<T>(uri, body, { headers: header });
      case 'GET':
        return this.http.get<T>(uri, {headers: header});
      default:
        console.log(`Method ${method} doesn't exist`);
        throw new Error('Method doesn\'t exist');
    }
  }
}
