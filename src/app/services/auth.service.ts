import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged: boolean;

  constructor(private http: HttpClient,private router: Router) { }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.IsLogged();
  }

  RegisterUser(ObjUser) {
    const URL = 'http://localhost:3600/api/usuario/create';
    return this.http.post(URL, ObjUser)

  }

  IsLogged(){
    if( this.logged === true ) {
      return true;
    }
    return false;
  }

  LogingUser(ObjUser) {
    // const URL = 'http://172.23.11.119:3000/api/usuario/create';
    const URL = 'http://localhost:3600/api/usuario';
    this.logged = true
    return this.http.post(URL, ObjUser)

  }

  LogOut() {
    this.logged = false;
    this.router.navigateByUrl('');
  }
}