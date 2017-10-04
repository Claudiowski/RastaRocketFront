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
        console.log(data)
        let token = data.split(":")[1]
        token = token.split("\"")[1]
        console.log(token)
        sessionStorage.setItem('token', token)
        this.router.navigateByUrl('/consult-need') })
  }

  resetForm() {
    this.email = '';
    this.password = '';
  }
}
