import { HomeComponent } from './travel/home/home.component';
import { FirstpageComponent } from './travel/firstpage/firstpage.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './travel/admin/admin.component';
import { AdminModule } from './travel/admin/admin.module'

import { CrudCircuitComponent } from './travel/admin/cruds/crud-circuit/crud-circuit.component'
import { CrudLieuComponent } from './travel/admin/cruds/crud-lieu/crud-lieu.component'
import { CrudUserComponent } from './travel/admin/cruds/crud-user/crud-user.component'

const routes: Routes =  [
  {
    path: '',
    component: FirstpageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'circuit', pathMatch: 'full'},
      { path: 'circuit', component:  CrudCircuitComponent},
      { path: 'lieu', component: CrudLieuComponent },
      { path: 'user', component: CrudUserComponent}
    ]
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
