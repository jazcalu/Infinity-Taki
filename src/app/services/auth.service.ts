import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged: boolean;
  private uid: string;
  public user: any;

  constructor(private http: HttpClient, private router: Router) {
    this.GetUserDetails();
   }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.IsLogged();
  }

  RegisterUser(ObjUser) {
    const URL = 'http://localhost:3000/api/usuario/create';
    console.log(ObjUser);
    return this.http.post(URL, ObjUser);
  }

  IsLogged() {
    if (this.logged) {
      return true;
    }
    return false;
  }

  LogingUser(ObjUser): Observable<any> {
    // const URL = 'http://172.23.11.119:3000/api/usuario/create';
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const URL = 'http://localhost:3000/api/login';
    this.logged = true;
    console.log('Estamos ready');
    return this.http.post(URL, ObjUser);

  }

  LogOut() {
    this.logged = false;
    this.router.navigateByUrl('');
    localStorage.removeItem('uid');
    localStorage.removeItem('data');


  }

  SaveToken(uid, data) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('data', JSON.stringify(data));

    this.uid = uid;
  }

// tslint:disable-next-line: one-line
  GetUserDetails(){
    this.user = JSON.parse(localStorage.getItem('data'));
  }
}

