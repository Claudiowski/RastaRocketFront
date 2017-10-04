import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  private url : string
  
      constructor(private http: Http) { 
          this.url = 'https://levasseurantoine.ovh/rastarocket/api/token/'
      }
  
      public fetchToken(email : string, passwd : string){
        let params = new URLSearchParams()
        let headers = new Headers()
        headers.append('Authorization', "Basic " + btoa(email + ':' + passwd))
        headers.append('Content-Type', 'application/json')
        return this.http.get(this.url, new RequestOptions({ headers: headers }))
                .toPromise()
                .then(response => { 
                    let token = response.text()
                    token = token.substr(1, token.length)
                    return token.substr(0, token.length-2)
                 })
      }
  
      private formatHeaders() {
          return new Headers().append('Content-Type', 'application/json')
      }
}
