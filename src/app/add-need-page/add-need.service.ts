import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http'

@Injectable()
export class AddNeedService {

  url = "http://vps463091.ovh.net/rastarocket/api/needs/"

  constructor(private http : Http) { }

  public addNeed(title, contact, customer, consultant, status, description, duration, price, start) {
    let headers = new Headers()
    let params = new URLSearchParams()
    headers.append('Authorization', 'Token ' + sessionStorage.getItem('token'))
    params.append('title', ''+title)
    params.append('contact', ''+contact)
    params.append('customer', ''+customer)
    params.append('consultant', ''+consultant)
    params.append('created_at', ''+status)
    params.append('description', ''+description)
    params.append('month_duration', ''+duration)
    params.append('contact', ''+contact)    
    params.append('rate', ''+price)
    params.append('start_at_latest', ''+start)
    this.http.post(this.url, params, new RequestOptions(headers))
      .toPromise()
      .then()
  }

}
