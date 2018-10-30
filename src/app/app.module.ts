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
import { HomeComponent } from './travel/home/home.component';
import { MatIconModule, MatSliderModule } from '@angular/material';
import { NavbarHomeComponent } from './travel/navbar-home/navbar-home.component';
import { TravelDetailsComponent } from './travel/travel-details/travel-details.component';
import { ReservationModalComponent } from './travel/reservation-modal/reservation-modal.component';
import { MyReservationComponent } from './travel/my-reservation/my-reservation.component';
import { ApiService } from './service/api/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    NavbarComponent,
    LoginmodalComponent,
    RegistermodalComponent,
    HomeComponent,
    NavbarHomeComponent,
    TravelDetailsComponent,
    ReservationModalComponent,
    MyReservationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AdminModule,
    Routing,
    MatIconModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginmodalComponent,
    RegistermodalComponent,
    ReservationModalComponent
  ]
})
export class AppModule { }
