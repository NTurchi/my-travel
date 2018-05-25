import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminNavbarComponent,
    AdminComponent
  ]
})
export class AdminModule { }
