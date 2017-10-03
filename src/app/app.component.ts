import { Component } from '@angular/core';
import { AppService } from './app.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private pseudo   : string
  private password : string
  
  constructor(private _appService : AppService, private router : Router){ }

  submitLogin() {

  }

  resetForm() {
    this.pseudo = '';
    this.password = '';
  }
}
