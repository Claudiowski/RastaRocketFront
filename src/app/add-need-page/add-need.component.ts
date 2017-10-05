import { Component, OnInit, Injectable, TemplateRef } from '@angular/core'
import { AddNeedService } from './add-need.service'

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { Router } from '@angular/router'

@Component({
  selector: 'add-need',
  templateUrl: './add-need.component.html',
  styleUrls: ['./add-need.component.css']
})
export class AddNeedComponent implements OnInit {

  private contactSelected
  private customerSelected

  private foundContacts : any[]
  private foundCustomers : any[]

  public modalRef: BsModalRef;

  private page : number

  private title: string
  private contact: string
  private customer: string
  private keys : string[]

  private consultant: number[]

  private description: string
  private duration: number

  private price: number
  private start: Date

  constructor(private _addNeedService : AddNeedService,
              private modalService: BsModalService,
    private router : Router) { }
 

  ngOnInit() {
    this.page = 1
    this.consultant = []
    this.keys = []
    this.foundContacts = []
    this.foundCustomers = []
   }

   private goToGrid() {
    this.router.navigateByUrl('/consult-need')   
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  private sendNeed()
  {
    let token = sessionStorage.getItem('token')
    this._addNeedService.addNeed(this.title, this.contact, this.customer, this.keys, this.consultant, this.description, this.duration, this.price, this.start)
    this.page = 1
  }

  private submitPage1(template, title, contact, customer, key1, key2, key3) {
    if (title == '' || contact == '' || customer == '') {
      this.openModal(template)
    } else {
      this.title = title
      this.contact = this.findContactId()
      this.customer = this.findCustomerId()
      if (key1 != '') this.keys.push(key1)
      if (key2 != '') this.keys.push(key2)
      if (key3 != '') this.keys.push(key3)
      console.log(this.keys)
      this.page ++
    }
    console.log(this.contact)
  }

  private findContactId() {
    for (let i = 0; i < this.foundContacts.length; i++) {
      if (this.foundContacts[i].name == this.contactSelected) {
        return this.foundContacts[i].id
      }
    }
    return ''
  }

  private findCustomerId() {
    for (let i = 0; i < this.foundCustomers.length; i++) {
      if (this.foundCustomers[i].name == this.contactSelected) {
        return this.foundCustomers[i].id
      }
    }
    return ''
  }  

  private submitPage2(template, cons1, cons2, cons3, cons4, cons5, description, duration) {
    console.log(description)
    if (description == '') {
      this.openModal(template)
    } else {
      if (cons1 != '') this.consultant.push(cons1)
      if (cons2 != '') this.consultant.push(cons2)
      if (cons3 != '') this.consultant.push(cons3)
      if (cons4 != '') this.consultant.push(cons4)
      if (cons5 != '') this.consultant.push(cons5)
      this.description = description.trim()
      if (duration != '') this.duration = +duration
      this.page ++
    }
  }

  private submitPage3(price, start) {
    if (price != '') this.price = +price
    if (start != '') this.start = start
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
    this.duration = 0
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
    this.duration = 0
    this.description = ''
    this.page = 1
  }

  private getContacts(token) {
    if (token != ''){
    this._addNeedService.getContacts(token)
        .then(data => {
          console.log(data)
          this.foundContacts = data
        })
      }
  }

  private getCustomers(token) {
    if (token != ''){
    this._addNeedService.getCustomers(token)
        .then(data => {
          console.log(data)
          this.foundCustomers = data
        })
      }
  }
  
}
