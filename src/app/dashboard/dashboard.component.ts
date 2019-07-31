import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MingleService } from '@totvs/mingle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private mingleService = new MingleService();

  constructor(private route: Router) { }

  ngOnInit() {}

  configMingleURL() {
    console.log(this.mingleService.configMingleURL('check_security'));
  }

  gateway() {
    const url = 'check_security';

    this.mingleService.gateway.get(url).subscribe(res => {
      console.log(res);
    }, err => {
      console.log('error: ', err);
    });

  }

  getAccessToken() {
    console.log(this.mingleService.getAccessToken());
  }

  getAllItemsFromStorage() {
    this.mingleService.getAllStorage().then(res => {
      console.log(res);
    });
  }

  getBodyToRefreshTokenAPI() {
    console.log(this.mingleService.getBodyToRefreshTokenAPI());
  }

  getRefreshTokenURL() {
    console.log(this.mingleService.getRefreshTokenURL());
  }

  getSessionInfo() {
    console.log(this.mingleService.getSessionInfo());
  }

  logout() {
    this.mingleService.auth.logout().subscribe(() => {
      this.route.navigate(['home']);
    });
  }

}
