import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private _authService: AuthService, 
              private router : Router) {}

  canActivate() {
    return this._authService.isLoggedIn()
  }
}