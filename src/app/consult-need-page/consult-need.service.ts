import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsultNeedService {

  url = "https://levasseurantoine.ovh/rastarocket/api/needs/"

  constructor(private http : Http) { }

  public fetchNeedService() {
    let headers = new Headers()
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))
    return this.http.get(this.url, new RequestOptions({ headers: headers }))
            .toPromise()
            .then(response => { 
                console.log(response)
                return response.json().needs
             })
  }

  public deleteNeed(need_id : number) {
    let headers = new Headers()
    let url = this.url + need_id
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))
    return this.http.delete(url, new RequestOptions({ headers: headers }))
            .toPromise()
            .then(response => { 
                console.log(response)
             })
  }
}
