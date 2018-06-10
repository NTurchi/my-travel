import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor(private router: Router) { }


  goToMyReservation() {
    this.router.navigate(['/reservation']);
  }

  goToMyHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
