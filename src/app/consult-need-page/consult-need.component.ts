import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConsultNeedService } from './consult-need.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-consult-need',
  templateUrl: './consult-need.component.html',
  styleUrls: ['./consult-need.component.css']
})
export class ConsultNeedComponent implements OnInit {

  public modalRef: BsModalRef;

  private chosenNeed : Object

  needs = [];
  rowsOnPage = 5;

  needToDelete = 0;

  constructor(private _consultNeedService: ConsultNeedService,
              private modalService: BsModalService,
              private router: Router) { }

  ngOnInit() {
    moment.locale('fr');
    this.fetchNeeds();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  private fetchNeeds() {
    this._consultNeedService.fetchNeedService()
            .then(data => {
              this.needs = this.parsingDate(data);
            });
  }

  private parsingDate(data) {
    for (let i = 0; i < data.length; i++) {
      const date = data[i].created_at;
      data[i].created_at = moment(date).format('ddd DD MMM GGGG');
    }
    return data;
  }

  private goToForm() {
    this.router.navigateByUrl('/add-need');
  }

  private tryDeleteNeed(need_id, template) {
    this.modalRef.hide()
    this.modalRef = this.modalService.show(template);
    this.needToDelete = need_id;
  }

  private deleteNeed() {
    this._consultNeedService.deleteNeed(this.needToDelete);
    this.needToDelete = 0;
    this.needs = [];
    this._consultNeedService.fetchNeedService()
            .then(data => {
              console.log(data);
              this.needs = data;
            });
  }

  private dontDeleteNeed() {
    this.modalRef.hide();
    this.needToDelete = 0;
  }

  private fetchSpecificNeed(need_id) {
    return this._consultNeedService.fetchSpecificNeed(need_id)
          .then(data => {
            const date = data.created_at;
            data.created_at = moment(date).format('ddd DD MMM GGGG')
            this.chosenNeed = data}
          )
    
  }

  private showSpecificNeed(need_id, template) {
    this.fetchSpecificNeed(need_id)
          .then(() => this.openModal(template))
  }
}
