import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin.component';

import { CrudCircuitComponent } from './cruds/crud-circuit/crud-circuit.component';
import { CrudCircuitEtapeComponent } from './cruds/crud-circuit/crud-circuit-etape.component';
import { CrudLieuComponent } from './cruds/crud-lieu/crud-lieu.component';
import { CrudUserComponent } from './cruds/crud-user/crud-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    AdminNavbarComponent,
    AdminComponent,
    CrudCircuitComponent,
    CrudCircuitEtapeComponent,
    CrudLieuComponent,
    CrudUserComponent
  ]
})
export class AdminModule { }
