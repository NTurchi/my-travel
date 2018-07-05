import { Component, OnInit } from '@angular/core';

import { AdminComponent } from '../admin.component';
import { CrudCircuitComponent } from '../cruds/crud-circuit/crud-circuit.component';
import { CrudLieuComponent } from '../cruds/crud-lieu/crud-lieu.component';
import { CrudUserComponent } from '../cruds/crud-user/crud-user.component';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
