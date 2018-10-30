import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../service/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUri = 'http://monapi.com/';
  private bearer: string;

  constructor(private service: ApiService) { }

  dataRoutes = [
    {
      'places': {
        'route': '/lieux',
        'set': []
      },
      'circuits': {
        'route': '/circuits',
        'set': []
      },
      'cities': {
        'route': '/villes',
        'set': []
      },
      'countries': {
        'route': '/pays',
        'set': []
      },
      'users': {
        'route': '/personnes',
        'set': []
      }
    }
  ];

   getData(routeObject) {
     this.bearer = sessionStorage.getItem('token');
     this.service.doRequest(routeObject['route'], 'GET', this.bearer)
                 .toPromise()
                 .then((data) => routeObject['set'] = data);
   }

   postData(route, params) {
    this.service.doRequest(route, 'POST', this.bearer, params);
   }

   putData(route, params) {
    this.service.doRequest(route, 'PUT', this.bearer, params);
   }

   deleteData(route, id) {
    this.service.doRequest(route, 'DELETE', this.bearer, [], id);
   }
}
