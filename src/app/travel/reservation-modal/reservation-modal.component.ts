import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent implements OnInit {

/**
   * Formulaire de connexion à l'application
   * @type {FormControl}
   * @memberof LoginmodalComponent
   */
  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder) {
    this.form = fb.group({
      participantsFirstName: this.fb.array([]),
      participantsLastName: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  addParticipant() {
    const controlFn = <FormArray>this.form.controls['participantsFirstName'];
    const controlLn = <FormArray>this.form.controls['participantsLastName'];
    controlFn.push(new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]));
    controlLn.push(new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]));
  }

  reserver() {
  }

}
