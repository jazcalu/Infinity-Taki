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


  objUser ={
    email: '',
    password: ''
  }


  modalFormDarkEmail = new FormControl('', Validators.email);
  modalFormDarkPassword = new FormControl('', Validators.required);

  // URL = 'http://172.23.11.119:3000/api/usuario/create';

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }


  onLogin() {
    console.log(this.objUser);
    this.authService.LogingUser(this.objUser).subscribe(respuesta => {
      console.log(respuesta)
        if(respuesta.uid && respuesta.message === 'Ok'){
          console.log(respuesta.uid)
          console.log("pasamos ")
        }

      },error => {
        console.log(error);
      })
  }
}
