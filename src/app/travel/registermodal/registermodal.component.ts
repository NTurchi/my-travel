import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registermodal',
  templateUrl: './registermodal.component.html',
  styleUrls: ['./registermodal.component.css']
})
export class RegistermodalComponent implements OnInit {

   /**
   * Formulaire d'enregistrement à l'application
   * @type {FormControl}
   * @memberof LoginmodalComponent
   */
  form: FormGroup;

  /**
   * Si le bouton enregistrer a été cliqué une fois
   * @type {boolean}
   * @memberof RegistermodalComponent
   */
   registerButtonClickOnce: boolean;

  /**
   * Validateur de mot de passe
   * @memberof RegistermodalComponent
   */
  passwordMatcher = (control: AbstractControl): {[key: string]: boolean} => {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    if (!password || !confirm) { return null; }
    return password.value === confirm.value ? null : { mismatch: true };
}


  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder) {
    this.form = fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      // tslint:disable-next-line:max-line-length
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      confirmPassword: new FormControl('', Validators.required),
    }, { validator: this.passwordMatcher });
  }

  ngOnInit() {
  }

  register() {
    this.registerButtonClickOnce = true;
    // Le formulaire est valide ? On peut enregistrer les données
    if (this.form.valid) {
      const newUser: User = {
        firstName: this.form.controls.firstname.value,
        lastName: this.form.controls.lastname.value,
        email: this.form.controls.mail.value,
        password: this.form.controls.password.value
      };
      console.log(newUser);
      // TODO: Appel à l'API pour enregistrer le USER
    }
  }

}
