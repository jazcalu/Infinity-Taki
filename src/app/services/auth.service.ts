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
  private data: object;

  constructor(private http: HttpClient, private router: Router) { }

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
    if (this.data) {
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

  }

  SaveToken(uid: string, data: any) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('data', data);

    this.uid = uid;
  }

  GetUserDetails() {
    // this.data = data;
  }
}

