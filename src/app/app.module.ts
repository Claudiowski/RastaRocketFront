import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AddNeedComponent } from './add-need-page/add-need.component'
import { AddNeedService } from './add-need-page/add-need.service'

import { ConsultNeedComponent } from './consult-need-page/consult-need.component'
import { ConsultNeedService } from './consult-need-page/consult-need.service'

@NgModule({
  declarations: [
    AppComponent,
    AddNeedComponent,
    ConsultNeedComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [
    AddNeedService,
    ConsultNeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
