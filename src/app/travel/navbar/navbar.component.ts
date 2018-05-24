import { RegistermodalComponent } from './../registermodal/registermodal.component';
import { LoginmodalComponent } from './../loginmodal/loginmodal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
   * Si une modale est ouverte
   * @type {boolean}
   * @memberof NavbarComponent
   */
  modalIsOpen: boolean;

  constructor(private modalService: NgbModal) {
   }

  ngOnInit() {
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginmodalComponent, { centered: true });
    this.modalIsOpen = true;
  }


}
