import { Component, OnInit } from '@angular/core';
import { ConsultNeedService } from './consult-need.service'
import { Router } from '@angular/router'

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-consult-need',
  templateUrl: './consult-need.component.html',
  styleUrls: ['./consult-need.component.css']
})
export class ConsultNeedComponent implements OnInit {

  public modalRef: BsModalRef;  

  needs 
  rowsOnPage = 20

  needToDelete = 0

  constructor(private _consultNeedService : ConsultNeedService,
              private modalService: BsModalService,    
              private router : Router) { }

  ngOnInit() {
    this.fetchNeeds()
  }

  private fetchNeeds() {
    this._consultNeedService.fetchNeedService()
            .then(data => {
              console.log(data)
              this.needs = data
            })
  }

  private goToForm() {
    this.router.navigateByUrl('/add-need')   
  }

  private tryDeleteNeed(need_id, template) {
    this.modalRef = this.modalService.show(template);
    this.needToDelete = need_id  
  }

  private deleteNeed() {
    this._consultNeedService.deleteNeed(this.needToDelete)
    this.needToDelete = 0
    this.needs = []
    this._consultNeedService.fetchNeedService()
            .then(data => {
              console.log(data)
              this.needs = data
            })
  }

  private dontDeleteNeed() {
    this.modalRef.hide()
    this.needToDelete = 0
  }
}
