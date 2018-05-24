import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit {

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
      mail: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.email]),
      // tslint:disable-next-line:max-line-length
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])
    });
  }

  ngOnInit() {
  }

  /**
   * Effectuer la conexion à l'API
   * @memberof LoginmodalComponent
   */
  login() {
    // Les données rentrées dans le formulaire sont valides ?
    if (this.form.valid) {
        // TODO: Appel à l'API
        const mail = this.form.controls.mail.value;
        const password = this.form.controls.password.value;
        console.log({ username: mail, password: password });
    }
  }

}
