import { Component } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent);
  }
 
  hideModal() {
    this.modalRef.hide();
  }
}
