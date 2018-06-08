import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   /**
   * Formulaire de filtre pour la recherche de circuit
   * @type {FormControl}
   * @memberof LoginmodalComponent
   */
  form: FormGroup;

  /**
   * Pour filtrer les circuits par ville ou par circuit
   * @type {boolean}
   * @memberof HomeComponent
   */
  filterByCountry: boolean;

  constructor(private fb: FormBuilder) {
    // TODO: regader comment faire les formes selects
    this.form = fb.group({
      paysdepart: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    });
  }

  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 1;
    }
    return value + '€';
  }

}
