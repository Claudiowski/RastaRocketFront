import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http'


@Injectable()
export class AddNeedService {

  url = "https://levasseurantoine.ovh/rastarocket/api/needs/"

  constructor(private http : Http) { }

  public addNeed(title, contact, customer, keys, consultant, description, duration, price, start) {
    let headers = new Headers()
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))
    headers.append('Content-Type', 'application/json')
    let param = {"title": title, "contact": contact, "customer": customer, "description": description, "status": "open" }
    if (keys != []) {
      param['success_keys'] = keys
    }
    if (consultant != []) {
      param['consultants'] = consultant
    }
    if (duration != '') {
      param['month_duration'] = duration
    }
    if (price != 0) {
      param['rate'] = price
    }
    if (start != '') {
      param['start_at_latest'] = start
    }
    this.http.post(this.url, JSON.stringify(param), new RequestOptions({ headers: headers }))
      .toPromise()
      .then()
  }

  public getContacts(token) {
    let url = "https://levasseurantoine.ovh/rastarocket/api/contacts/?name=" + token
    let headers = new Headers()
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))    
    return this.http.get(url, new RequestOptions({ headers: headers }))
                    .toPromise() 
                    .then(data => { 
                      return data.json()['contacts'] })
  }

  public getCustomers(token) {
    let url = "https://levasseurantoine.ovh/rastarocket/api/customers/?name=" + token
    let headers = new Headers()
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))    
    return this.http.get(url, new RequestOptions({ headers: headers }))
                    .toPromise() 
                    .then(data => { 
                      return data.json()['customers'] })
  }

  public getConsultants(token) {
    let url = "https://levasseurantoine.ovh/rastarocket/api/consultants/?name=" + token
    let headers = new Headers()
    headers.append('Authorization', "Token " + sessionStorage.getItem('token'))    
    return this.http.get(url, new RequestOptions({ headers: headers }))
                    .toPromise() 
                    .then(data => { 
                      return data.json()['consultants'] })
  }
}
