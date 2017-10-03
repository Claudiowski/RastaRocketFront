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
        this.url    = "http://localhost:8080/auth/verification"
    }

    isLoggedIn() {
        let token = ''
        if (sessionStorage['token'] == undefined) {
            this.router.navigateByUrl('/login')
            return this.isNotLogged()
        }
        token = sessionStorage.getItem('token')
        let headers = new Headers()
        headers.append('Authorization', token)
        return this.http.get(this.url, { headers: headers } )
                  .toPromise()
                  .then(response => {
                      if (response.status == 200) {
                          return this.isLogged()
                      }
                      this.router.navigateByUrl('/login')
                      return this.isNotLogged()
                  })
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