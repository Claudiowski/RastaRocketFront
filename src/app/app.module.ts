import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }           from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service'
import { CanActivateViaAuthGuard } from './activation';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service'

import { AddNeedComponent } from './add-need-page/add-need.component'
import { AddNeedService } from './add-need-page/add-need.service'

import { ConsultNeedComponent } from './consult-need-page/consult-need.component'
import { ConsultNeedService } from './consult-need-page/consult-need.service'

import { DataTableModule } from "angular2-datatable";
import { DatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { BsModalService } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddNeedComponent,
    ConsultNeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    DatepickerModule,
    ModalModule.forRoot()
  ],
  providers: [
    AppService,
    AddNeedService,
    ConsultNeedService,
    CanActivateViaAuthGuard,
    AuthService,
    BsModalService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
