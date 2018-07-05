import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../service/api/api.service';

import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin.component';

import { CrudCircuitComponent } from './cruds/crud-circuit/crud-circuit.component';
import { CrudCircuitEtapeComponent } from './cruds/crud-circuit/crud-circuit-etape.component';
import { CrudLieuComponent } from './cruds/crud-lieu/crud-lieu.component';
import { CrudUserComponent } from './cruds/crud-user/crud-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    AdminNavbarComponent,
    AdminComponent,
    CrudCircuitComponent,
    CrudCircuitEtapeComponent,
    CrudLieuComponent,
    CrudUserComponent
  ],
  providers:[
    ApiService
  ]
})
export class AdminModule { }
