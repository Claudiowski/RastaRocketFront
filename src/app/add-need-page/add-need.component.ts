import { Component, OnInit, Injectable } from '@angular/core'
import { Http, URLSearchParams, RequestOptions } from '@angular/http'

import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-add-need',
  templateUrl: './add-need.component.html',
  styleUrls: ['./add-need.component.css']
})
export class AddNeedComponent implements OnInit {

  private page : number

  private title: string
  private contact: string
  private customer: string

  private consultant: number[]
  private status: string
  private description: string
  private duration: string

  private price: number
  private start: Date

  constructor(private http: Http) { 
    this.page = 1
    this.consultant = []
  }

  ngOnInit() {
  }

  private sendNeed()
  {
    let token = sessionStorage.getItem('token')

    let headers = new Headers()
    let params = new URLSearchParams()
    let url = ''

    headers.append('Authorization', token)  
    params.append('title', ''+this.title)
    params.append('contact', ''+this.contact)
    params.append('customer', ''+this.customer)
    params.append('consultant', ''+this.consultant)
    params.append('created_at', ''+this.status)
    params.append('description', ''+this.description)
    params.append('month_duration', ''+this.duration)
    params.append('contact', ''+this.contact)    
    params.append('rate', ''+this.price)
    params.append('start_at_latest', ''+this.start)
    
    this.http.post(url, params, new RequestOptions(headers))
             .toPromise()
             .then(response => { return response.json() })
  }

  private submitPage1(title, contact, customer) {
    this.title = title
    this.contact = contact
    this.customer = customer
    this.page ++
  }

  private submitPage2(cons1, cons2, cons3, cons4, cons5, status, description, duration) {
    this.consultant.push(cons1)
    this.consultant.push(cons2)
    this.consultant.push(cons3)
    this.consultant.push(cons4)
    this.consultant.push(cons5)
    this.status = status
    this.description = description
    this.duration = duration
    this.page ++
  }

  private submitPage3(price, start) {
    this.price = price
    this.start = start
    this.page ++
  }

  private backwardPage1() {
    this.title = ''
    this.contact = ''
    this.customer = ''
    this.page --
  }

  private backwardPage2() {
    this.consultant = []
    this.status = ''
    this.description = ''
    this.duration = ''
    this.page --
  }

  private backwardPage3() {
    this.price = 0
    this.start = null
    this.page --
  }

  private resetFormData() {
    this.title = ''
    this.contact = ''
    this.customer = ''
    this.consultant = []
    this.status = ''
    this.description = ''
    this.duration = ''
    this.status = ''
    this.description = ''
    this.duration = ''
    this.page = 1
  }
}
