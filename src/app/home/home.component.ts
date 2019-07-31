import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MingleService } from '@totvs/mingle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private mingleService = new MingleService();

  constructor(private route: Router) { }

  ngOnInit() {}

  auth() {
    this.mingleService.auth.login('admin', 'admin', 'M LC').subscribe(() => {
      console.log('Logged in Mingle.');
      this.mingleService.registerMetric('LOGIN SUCCESS');
      this.route.navigate(['dashboard']);
    },
    (authError) => {
      console.log('error in auth Mingle: ', authError.response.data);
      this.route.navigate(['home']);
    });
  }

  metrics() {
    this.mingleService.registerMetric('ANONYMOUS METRICS');
  }

}
