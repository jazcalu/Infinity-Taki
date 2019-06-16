import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private user: UserService, private http:HttpClient) { }

  ngOnInit() {
    this.GetUser();
  }

  GetUser() {
    this.user.getUsers().subscribe((respuesta)=>{
      console.log(respuesta.content);
    })

  }

}
