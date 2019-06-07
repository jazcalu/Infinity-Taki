import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

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

  ObjUsuario = {
    usu_nom: '',
    usu_ape: '',
    usu_nomArt: '',
    usu_email: '',
    usu_pass: ''
  }

  URL = 'http://172.23.11.119:3000/api/usuario/create';

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
