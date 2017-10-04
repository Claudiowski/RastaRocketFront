import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

    private logged : boolean
    private url    : string

    constructor(private http: Http,
                private router: Router) {
        this.logged = false
    }

    isLoggedIn() {
        let token = ''
        if (!sessionStorage['token']) {
            this.router.navigateByUrl('/login')
            return this.isNotLogged()
        }
        return this.isLogged()
    }

    isLogged() {
        this.logged = true
        return true
    }

    isNotLogged() {
        this.logged = false
        return false 
    }
}