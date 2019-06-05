import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ObjUsuario = {
    usu_nom: '',
    usu_ape: '',
    usu_nomArt: '',
    usu_email: '',
    usu_pass: ''
  }

  URL = 'http://172.23.11.119:3000/api/usuario/create';
  // URL = 'http://172.23.11.119:3000/api/usuario';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createUser() {

    this.http.post(this.URL,this.ObjUsuario)
      .subscribe(data =>{
        console.log(data)
      }, error => {
        console.log(error)
      })
  }
}
