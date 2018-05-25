import { Component, OnInit } from '@angular/core';

import { AdminComponent } from '../admin.component';
import { CrudCircuitComponent } from '../cruds/crud-circuit/crud-circuit.component';
import { CrudEtapeComponent } from '../cruds/crud-etape/crud-etape.component';
import { CrudLieuComponent } from '../cruds/crud-lieu/crud-lieu.component';
import { CrudClientComponent } from '../cruds/crud-client/crud-client.component';
import { CrudAdminComponent } from '../cruds/crud-admin/crud-admin.component';

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
