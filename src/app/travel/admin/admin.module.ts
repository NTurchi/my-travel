import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin.component';
import { CrudCircuitComponent } from './cruds/crud-circuit/crud-circuit.component';
import { CrudEtapeComponent } from './cruds/crud-etape/crud-etape.component';
import { CrudLieuComponent } from './cruds/crud-lieu/crud-lieu.component';
import { CrudClientComponent } from './cruds/crud-client/crud-client.component';
import { CrudAdminComponent } from './cruds/crud-admin/crud-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AdminNavbarComponent,
    AdminComponent,
    CrudCircuitComponent,
    CrudEtapeComponent,
    CrudLieuComponent,
    CrudClientComponent,
    CrudAdminComponent
  ]
})
export class AdminModule { }
