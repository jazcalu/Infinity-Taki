import { Component} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }

}
