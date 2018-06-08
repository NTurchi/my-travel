import { HomeComponent } from './travel/home/home.component';
import { FirstpageComponent } from './travel/firstpage/firstpage.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './travel/admin/admin.component';
import { AdminModule } from './travel/admin/admin.module';
import { CrudCircuitComponent } from './travel/admin/cruds/crud-circuit/crud-circuit.component';
import { CrudEtapeComponent } from './travel/admin/cruds/crud-etape/crud-etape.component';
import { CrudLieuComponent } from './travel/admin/cruds/crud-lieu/crud-lieu.component';
import { CrudClientComponent } from './travel/admin/cruds/crud-client/crud-client.component';
import { CrudAdminComponent } from './travel/admin/cruds/crud-admin/crud-admin.component';

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
      { path: 'admin', redirectTo: 'admin/circuit', pathMatch: 'full'},
      { path: 'circuit', component:  CrudCircuitComponent},
      { path: 'etape', component: CrudEtapeComponent },
      { path: 'lieu', component: CrudLieuComponent },
      { path: 'client', component: CrudClientComponent },
      { path: 'admin', component: CrudAdminComponent}
    ]
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
