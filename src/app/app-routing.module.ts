import { FirstpageComponent } from './travel/firstpage/firstpage.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AdminComponent } from './travel/admin/admin.component';

const routes: Routes =  [
  { 
    path: '', 
    component: FirstpageComponent 
  },
  { 
    path: 'admin', 
    component: AdminComponent,
    /*children: 
      [
        {

        },
        {
          
        },
        {

        }
      ] */
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }
