import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstpageComponent } from './travel/firstpage/firstpage.component';
import { NavbarComponent } from './travel/navbar/navbar.component';
import { LoginmodalComponent } from './travel/loginmodal/loginmodal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistermodalComponent } from './travel/registermodal/registermodal.component';
import { HomeComponent } from './travel/home/home.component';
import { MatIconModule, MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    NavbarComponent,
    LoginmodalComponent,
    RegistermodalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginmodalComponent,
    RegistermodalComponent
  ]
})
export class AppModule { }
