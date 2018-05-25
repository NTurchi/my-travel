import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FirstpageComponent } from './travel/firstpage/firstpage.component';
import { NavbarComponent } from './travel/navbar/navbar.component';
import { LoginmodalComponent } from './travel/loginmodal/loginmodal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistermodalComponent } from './travel/registermodal/registermodal.component';
import { AdminModule } from './travel/admin/admin.module';

import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    NavbarComponent,
    LoginmodalComponent,
    RegistermodalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AdminModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginmodalComponent,
    RegistermodalComponent
  ]
})
export class AppModule { }
