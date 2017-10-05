import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AppService } from '../app.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsultNeedService {

  url = 'https://levasseurantoine.ovh/rastarocket/api/needs/';

constructor(private http: Http, private _appService: AppService) { }

  public fetchNeedService() {
    const headers = new Headers()
    headers.append('Authorization', 'Token ' + sessionStorage.getItem('token'));
    return this.http.get(this.url, new RequestOptions({ headers: headers }))
            .toPromise()
            .then(response => {
                console.log(response);
                if (response.status === 401) {
                  this.reSubmitLogin();
                  return this.fetchNeedService();
                } else {
                  return response.json().needs;
                }
    });
  }

  public deleteNeed(need_id : number) {
    const headers = new Headers();
    const url = this.url + need_id;
    headers.append('Authorization', 'Token ' + sessionStorage.getItem('token'));
    return this.http.delete(url, new RequestOptions({ headers: headers }))
            .toPromise()
            .then(response => {
                console.log(response);
             });
  }

  reSubmitLogin() {
    this._appService.fetchToken(sessionStorage.getItem('email'), sessionStorage.getItem('password'))
    .then(data => {
        let token = data.split(':')[1];
        token = token.split('"')[1];
        console.log(token);
        sessionStorage.setItem('token', token);
      });
  }
}
