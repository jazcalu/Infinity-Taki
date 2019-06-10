import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  modalFormDarkName = new FormControl('', Validators.required);
  modalFormDarkLastName = new FormControl('', Validators.required);
  modalFormDarkNickName = new FormControl('', Validators.required);
  modalFormDarkEmail = new FormControl('', Validators.email);
  modalFormDarkPassword = new FormControl('', Validators.required);

  ObjUser = {
    usu_nom: '',
    usu_ape: '',
    usu_nomArt: '',
    usu_email: '',
    usu_pass: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  RegisterUser() {
    this.authService.RegisterUser(this.ObjUser)
      .subscribe(data => {
        console.log(data)
        return true;
      }, error => {
        console.log(error)
        return false;
      })
  }
}
