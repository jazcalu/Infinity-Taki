import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ObjUsuario = {
    usu_email: '',
    usu_pass: ''
  };

  modalFormDarkEmail = new FormControl('', Validators.email);
  modalFormDarkPassword = new FormControl('', Validators.required);

  // URL = 'http://172.23.11.119:3000/api/usuario/create';

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }


  onLogin() {
    this.authService.LogingUser(this.ObjUsuario).subscribe(respuesta => {
        console.log(respuesta);
      })
  }
}
