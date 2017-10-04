import { Component } from '@angular/core';
import { AppService } from './app.service'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

import { Login } from './login'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private email   : string
  private password : string
  
  constructor(private _appService : AppService,
              private _authService: AuthService,
              private router : Router){ }

  submitLogin() {
    this._appService.fetchToken(this.email, this.password)
    .then(data => { 
        sessionStorage.setItem('token', data)
        console.log(data)
        this.router.navigateByUrl('') })
  }

  resetForm() {
    this.email = '';
    this.password = '';
  }
}
