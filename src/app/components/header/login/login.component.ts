import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ObjUsuario = {
    usu_nom: '',
    usu_ape: '',
    usu_nomArt: '',
    usu_email: '',
    usu_pass: ''
  }

  // modalFormDarkEmail = new FormControl('', Validators.email);
  // modalFormDarkPassword = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
