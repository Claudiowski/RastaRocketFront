import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsultNeedService {

  url = "http://vps463091.ovh.net/rastarocket/api/needs"

  constructor(private http : Http) { }

  public fetchNeedService() {
    let headers = new Headers()
    headers.append('Authorization', sessionStorage.getItem('token'))
    return this.http.get(this.url, new RequestOptions({ headers: headers }))
            .toPromise()
            .then(response => { 
                console.log(response)
                return response
             })
  }
}
