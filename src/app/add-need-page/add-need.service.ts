import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http'

@Injectable()
export class AddNeedService {

  url = "https://levasseurantoine.ovh/rastarocket/api/needs/"

  constructor(private http : Http) { 

  }

  public addNeed(title, contact, customer, keys, consultant, description, duration, price, start) {
    let headers = new Headers()
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))
    headers.append('Content-Type', 'application/json')
    let param = {"title": title, "contact": contact, "customer": customer, "description": description, "status": "open", "success_keys": keys, "consultants": consultant, "month_duration": duration, "rate": price, "start_at_latest": start}

    console.log(JSON.stringify(param))
    this.http.post(this.url, JSON.stringify(param), new RequestOptions({ headers: headers }))
      .toPromise()
      .then()
  }

  public getConsultants(token) {
    let url = "https://levasseurantoine.ovh/rastarocket/api/contacts/?name=" + token
    let headers = new Headers()
    let query = new RegExp(token, 'ig');
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))    
    this.http.get(url, new RequestOptions({ headers: headers }))
      .subscribe(data => console.log(data))
  }
}
