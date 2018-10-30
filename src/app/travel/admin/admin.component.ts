import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { forEach } from '@angular/router/src/utils/collection';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: AdminService) { }

  ngOnInit() {
  }
}
