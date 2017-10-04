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

  public modalRef: BsModalRef;

  private page : number

  private title: string
  private contact: string
  private customer: string
  private keys : string[]

  private consultant: number[]

  private description: string
  private duration: string

  private price: number
  private start: Date

  constructor(private _addNeedService : AddNeedService,
              private modalService: BsModalService,
              private router : Router) { }

  ngOnInit() {
    this.page = 1
    this.consultant = []
    this.keys = []
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
  }

  private submitPage1(template, title, contact, customer, key1, key2, key3) {
    if (title == '' || contact == '' || customer == '') {
      this.openModal(template)
    } else {
      this.title = title
      this.contact = contact
      this.customer = customer
      this.keys.push(key1)
      this.keys.push(key2)
      this.keys.push(key3)
      this.page ++
    }
  }

  private submitPage2(template, cons1, cons2, cons3, cons4, cons5, description, duration) {
    console.log(description)
    if (description == '') {
      this.openModal(template)
    } else {
      this.consultant.push(cons1)
      this.consultant.push(cons2)
      this.consultant.push(cons3)
      this.consultant.push(cons4)
      this.consultant.push(cons5)
      this.description = description
      this.duration = duration
      this.page ++
    }
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
