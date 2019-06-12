import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  registroNull:Boolean

  ObjUser = {
    nombre: '',
    apellido: '',
    nomArtistico: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private ruto:Router) { }

  ngOnInit() {
  }

  RegisterUser() {
    if(this.ObjUser.nombre != '' && this.ObjUser.apellido != '' && this.ObjUser.nomArtistico != '' &&
       this.ObjUser.email != '' && this.ObjUser.password != ''){
        this.authService.RegisterUser(this.ObjUser)
        .subscribe(data => {
          console.log(data)
          this.registroNull = false
          // this.ruto.navigate(['/news'])
          return true;
        }, error => {  
          console.log(error)
          this.ruto.navigateByUrl('/news')
          return false;
        })
       }else{
         this.registroNull = true;
         console.log("Faltan datos");        
       }


  }
}


