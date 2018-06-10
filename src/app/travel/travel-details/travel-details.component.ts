import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservationModalComponent } from '../reservation-modal/reservation-modal.component';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  @Input() trip;
  @Input() alreadyReserve;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openReservationModal() {
    const modalRef = this.modalService.open(ReservationModalComponent, {centered: true});
  }

}
