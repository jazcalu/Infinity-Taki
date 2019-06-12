import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  camposNull: boolean;
  objUser = {
    email: '',
    password: ''
  };


  modalFormDarkEmail = new FormControl('', Validators.email);
  modalFormDarkPassword = new FormControl('', Validators.required);

  // URL = 'http://172.23.11.119:3000/api/usuario/create';

  constructor(private authService: AuthService, private ruta: Router) { }
  ngOnInit() {
  }


  onLogin() {
    if (this.objUser.email !== '' && this.objUser.password !== '') {
      this.camposNull = false;
      console.log(this.objUser);
      this.authService.LogingUser(this.objUser).subscribe(respuesta => {
        console.log(respuesta);
        this.authService.SaveToken(respuesta.uid,respuesta.content)
        this.objUser.email = '',
        this.objUser.password = '';
      }, error => {
        this.ruta.navigateByUrl('/news')
        console.log(error);
      })
    } else {
      this.objUser.email = '',
        this.objUser.password = ''
      this.camposNull = true
      console.log("faltan datos");

    }
  }
}
