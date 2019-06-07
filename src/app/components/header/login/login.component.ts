import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ObjUsuario = {
    usu_email: '',
    usu_pass: ''
  }

  // modalFormDarkEmail = new FormControl('', Validators.email);
  // modalFormDarkPassword = new FormControl('', Validators.required);

  // URL = 'http://172.23.11.119:3000/api/usuario/create';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createUser() {
    console.log("evento")
    // this.http.post(this.URL,this.ObjUsuario)
      // .subscribe(data =>{
        // console.log(data)
      // }, error => {
        // console.log(error)
      // })
  }
}
