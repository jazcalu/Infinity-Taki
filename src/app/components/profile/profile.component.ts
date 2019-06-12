import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  User() {
    this.authservice.GetUserDetails().subscribe((data)=> {
      this.user = data
    })



}
