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

import { CarouselModule } from 'ngx-bootstrap/carousel';

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
    CarouselModule
  ],
  providers: [
    AppService,
    AddNeedService,
    ConsultNeedService,
    CanActivateViaAuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
