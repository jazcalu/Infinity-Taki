<<<<<<< HEAD
import { Component} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
=======
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
>>>>>>> d6a3ecf12c6199d467a1cb415147950dc6c0069a

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

<<<<<<< HEAD
  modalRef: MDBModalRef;
=======
  constructor(private authService: AuthService) { }
>>>>>>> d6a3ecf12c6199d467a1cb415147950dc6c0069a

  constructor(private modalService: MDBModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }

  LogOut() {
    this.authService.LogOut()
  }

}
