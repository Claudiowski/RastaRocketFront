import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { AddNeedModule } from './add-need-page/add-need.module'
import { ConsultNeedModule } from './consult-need-page/consult-need.module'


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AddNeedModule,
    ConsultNeedModule
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
