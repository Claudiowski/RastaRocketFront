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

  private consultant1Selected
  private consultant2Selected
  private consultant3Selected

  private foundContacts : any[]
  private foundCustomers : any[]

  private foundConsultants1 : any[]
  private foundConsultants2 : any[]
  private foundConsultants3 : any[]

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
    this.foundConsultants1 = []
    this.foundConsultants2 = []
    this.foundConsultants3 = []
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
    console.log(key1)
    console.log(key2)
    console.log(key3)
    if (title == '' || contact == '' || customer == '') {
      this.openModal(template)
    } else {
      this.title = title
      this.contact = this.findContactId()
      this.customer = this.findCustomerId()
      if (key1 != undefined) this.keys.push(key1)
      if (key2 != undefined) this.keys.push(key2)
      if (key3 != undefined) this.keys.push(key3)
      this.page ++
    }
  }

  private findContactId() {
    for (let i = 0; i <= this.foundContacts.length; i++) {
      if (this.foundContacts[i]['name'] == this.contactSelected) {
        return this.foundContacts[i]['id']
      }
    }
    return ''
  }

  private findCustomerId() {
    for (let i = 0; i <= this.foundCustomers.length; i++) {
      if (this.foundCustomers[i].name == this.customerSelected) {
        return this.foundCustomers[i].id
      }
    }
    return ''
  }  

  private submitPage2(template, cons1, cons2, cons3, description, duration) {
    if (description == '') {
      this.openModal(template)
    } else {
      if (cons1 != '') this.consultant.push(this.findConsultant1Id())
      if (cons2 != '') this.consultant.push(this.findConsultant2Id())
      if (cons3 != '') this.consultant.push(this.findConsultant3Id())
      this.description = description.trim()
      if (duration != '') this.duration = +duration
      this.page ++
    }
  }

  private findConsultant1Id() {
    for (let i = 0; i <= this.foundConsultants1.length; i++) {
      if (this.foundConsultants1[i]['name'] == this.consultant1Selected) {
        return this.foundConsultants1[i]['id']
      }
    }
    return ''
  }

  private findConsultant2Id() {
    for (let i = 0; i <= this.foundConsultants2.length; i++) {
      if (this.foundConsultants2[i]['name'] == this.consultant2Selected) {
        return this.foundConsultants2[i]['id']
      }
    }
    return ''
  }

  private findConsultant3Id() {
    for (let i = 0; i <= this.foundConsultants3.length; i++) {
      if (this.foundConsultants3[i]['name'] == this.consultant3Selected) {
        return this.foundConsultants3[i]['id']
      }
    }
    return ''
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
          this.foundContacts = data
        })
      }
  }

  private getCustomers(token) {
    if (token != ''){
    this._addNeedService.getCustomers(token)
        .then(data => {
          this.foundCustomers = data
        })
      }
  }

  private getConsultants1(token){
    if (token != ''){
      this._addNeedService.getConsultants(token)
          .then(data => {
            this.foundConsultants1 = data
          })
        }
  }

  private getConsultants2(token){
    if (token != ''){
      this._addNeedService.getConsultants(token)
          .then(data => {
            this.foundConsultants2 = data
          })
        }
  }

  private getConsultants3(token){
    if (token != ''){
      this._addNeedService.getConsultants(token)
          .then(data => {
            this.foundConsultants3 = data
          })
        }
  }
}
