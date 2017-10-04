import { Component, OnInit } from '@angular/core';
import { ConsultNeedService } from './consult-need.service'

@Component({
  selector: 'app-consult-need',
  templateUrl: './consult-need.component.html',
  styleUrls: ['./consult-need.component.css']
})
export class ConsultNeedComponent implements OnInit {


  needs 
  rowsOnPage = 20

  constructor(private _consultNeedService : ConsultNeedService) { }

  ngOnInit() {
    this.fetchNeeds
  }

  private fetchNeeds() {
    this._consultNeedService.fetchNeedService()
            .then(data => {
              console.log(data)
              this.needs = data
            })
  }

}
