import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  private url : string
  
      constructor(private http: Http) { 
          this.url = ''
      }
  
      public fetchToken(pseudo : string, passwd : string){

      }
  
      private formatHeaders() {
          let headers = new Headers()
          headers.append('Content-Type', 'application/json')
          return headers
      }
}
