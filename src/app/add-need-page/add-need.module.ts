import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddNeedComponent } from './add-need.component';
import { AddNeedTitleComponent } from './add-need-title/add-need-title.component';
import { AddNeedClientComponent } from './add-need-client/add-need-client.component';
import { AddNeedDescriptionComponent } from './add-need-description/add-need-description.component';

import { AddNeedService } from './add-need.service'
import { AddNeedTitleService } from './add-need-title/add-need-title.service'
import { AddNeedClientService } from './add-need-client/add-need-client.service'
import { AddNeedDescriptionService } from './add-need-description/add-need-description.service'


@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    AddNeedComponent, 
    AddNeedTitleComponent, 
    AddNeedClientComponent, 
    AddNeedDescriptionComponent
  ],
  providers: [
    AddNeedService,
    AddNeedTitleService,
    AddNeedClientService,
    AddNeedDescriptionService
  ]})
export class AddNeedModule { }
