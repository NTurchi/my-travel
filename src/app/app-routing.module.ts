import { HomeComponent } from './travel/home/home.component';
import { FirstpageComponent } from './travel/firstpage/firstpage.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes =  [
  { path: 'home', component: HomeComponent },
  { path: '', component: FirstpageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }
