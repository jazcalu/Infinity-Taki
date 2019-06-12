import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  GetUserDetails(){
    this.authservice.GetUserDetails()
  }

}
