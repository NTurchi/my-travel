import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css'],
  providers: [NgbDatepickerConfig] // add NgbDatepickerConfig to the component providers
})
export class CrudUserComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal,
    private config: NgbDatepickerConfig) { 
      config.minDate = {year: 1900, month: 1, day: 1};
      config.maxDate = {year: 2099, month: 12, day: 31};
  
      // days that don't belong to current month are not visible
      config.outsideDays = 'hidden';
  
      // weekends are disabled
      config.markDisabled = (date: NgbDateStruct) => {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
      };
    }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
