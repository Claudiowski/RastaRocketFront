import { Component, OnInit, Injectable } from '@angular/core'
import { AddNeedService } from './add-need.service'

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
  private description: string
  private duration: string

  private price: number
  private start: Date

  constructor(private _addNeedService : AddNeedService) { 
    this.page = 1
    this.consultant = []
  }

  ngOnInit() { }

  private sendNeed()
  {
    let token = sessionStorage.getItem('token')
    this._addNeedService.addNeed(this.title, this.contact, this.customer, this.consultant, this.description, this.duration, this.price, this.start)
  }

  private submitPage1(title, contact, customer) {
    this.title = title
    this.contact = contact
    this.customer = customer
    this.page ++
  }

  private submitPage2(cons1, cons2, cons3, cons4, cons5, description, duration) {
    this.consultant.push(cons1)
    this.consultant.push(cons2)
    this.consultant.push(cons3)
    this.consultant.push(cons4)
    this.consultant.push(cons5)
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
    this.description = ''
    this.duration = ''
    this.description = ''
    this.duration = ''
    this.page = 1
  }
}
