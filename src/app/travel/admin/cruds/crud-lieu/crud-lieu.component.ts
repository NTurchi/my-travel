import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-crud-lieu',
  templateUrl: './crud-lieu.component.html',
  styleUrls: ['./crud-lieu.component.css']
})
export class CrudLieuComponent implements OnInit {

  closeResult: string;
  places: Array<String>;
  countries: Array<String>;
  cities: Array<String>;

  types = [
    {
      'label': 'Site'
    },
    {
      'label': 'Monument'
    },
    {
      'label': 'Musée'
    }
  ]

  constructor(private modalService: NgbModal,
              private config: NgbDatepickerConfig,
              private adminService: AdminService) { 
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
    this.places = this.adminService['places']['set'];
    this.cities = this.adminService['cities']['set']
    this.countries = this.adminService['countries']['set']
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
