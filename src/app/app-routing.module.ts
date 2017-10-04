import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNeedComponent }   from './add-need-page/add-need.component';
import { ConsultNeedComponent } from './consult-need-page/consult-need.component'

import { CanActivateViaAuthGuard } from './activation';
import { AppComponent }       from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/consult-need', pathMatch: 'full' },
  { path: 'consult-need',  component: ConsultNeedComponent, canActivate:  [CanActivateViaAuthGuard] },
  { path: 'add-need', component: AddNeedComponent, canActivate:  [CanActivateViaAuthGuard] },
  { path: 'login', component: AppComponent } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/