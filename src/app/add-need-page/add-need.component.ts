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

  private foundContacts : any[] = []
  private foundCustomers : any[] = []

  private foundConsultants1 : any[] = []
  private foundConsultants2 : any[] = []
  private foundConsultants3 : any[] = []

  public modalRef: BsModalRef;

  private page : number

  private title: string

  private key1 : string
  private key2 : string
  private key3 : string

  private description: string
  private duration: number

  private price: number
  private start: Date

  constructor(private _addNeedService : AddNeedService,
              private modalService: BsModalService,
    private router : Router) { }
 

  ngOnInit() {
    this.page = 1
   }

   private goToGrid() {
    this.router.navigateByUrl('/consult-need')   
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  private sendNeed()
  {
    let contact = this.findContactId()
    let customer = this.findCustomerId()
    let keys = this.formatKeys()
    let consultants = this.formatConsultants()
    this._addNeedService.addNeed(this.title, contact, customer, keys, consultants, this.description, this.duration, this.price, this.start)
    this.resetFormData()
    this.page = 1
  }

  private submitPage1(template) {
    if (this.title == undefined || this.contactSelected == undefined || this.customerSelected == undefined) {
      this.openModal(template)
    } else {
      this.page ++
    }
  } 

  private submitPage2(template) {
    if (this.description == undefined) {
      this.openModal(template)
    } else {
      this.page ++
    }
  }

  private submitPage3() {
    this.page ++
  }

  private backwardPage() {
    this.page --
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

  private formatKeys() {
    let keys = []
    if (this.key1 != undefined) {
      keys.push(this.key1)
    }
    if (this.key2 != undefined) {
      keys.push(this.key2)
    }
    if (this.key3 != undefined) {
      keys.push(this.key3)
    }
    return keys
  }

  private formatConsultants() {
    let consultants = []
    if (this.consultant1Selected != undefined) {
      consultants.push(this.findConsultant1Id())
    }
    if (this.consultant2Selected  != undefined) {
      consultants.push(this.findConsultant2Id())
    }
    if (this.consultant3Selected!= undefined) {
      consultants.push(this.findConsultant3Id())
    }
    return consultants
  }

  private resetFormData() {
    this.title = ''
    this.contactSelected = ''
    this.customerSelected = ''
    this.consultant1Selected = ''
    this.consultant2Selected = ''
    this.consultant3Selected = ''
    this.key1 = ''
    this.key2 = ''
    this.key3 = ''
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
