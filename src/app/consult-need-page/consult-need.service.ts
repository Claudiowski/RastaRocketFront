import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AppService } from '../app.service';

import {Observable} from 'rxjs/Observable';

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

  public fetchSpecificNeed(need_id) {
    let headers = new Headers();
    let url = this.url + need_id;
    headers.append('Authorization', 'Token ' + sessionStorage.getItem('token'));
    return this.http.get(url, new RequestOptions({ headers: headers }))
              .toPromise()
              .then(response =>{
                return response.json()
              })
  }

  fileChange(event, need_id) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        let headers = new Headers();
        formData.append('file', file, file.name);
        headers.append('Authorization', "Token " + sessionStorage.getItem('token'))
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let url = this.url + need_id + "/contents"
        console.log(event.target.files)
        console.log(url)
        this.http.post(url, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
  }
}
