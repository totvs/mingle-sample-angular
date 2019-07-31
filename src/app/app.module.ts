import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MingleService, Configuration } from '@totvs/mingle';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// - LAZY LOADING
export function initalize(mingle) {

  const config = new Configuration();
  config.app_identifier = 'your_app_id';
  config.environment = 'DEV';
  config.server = 'https://mingle_server/api';
  config.modules.crashr = true;
  config.modules.usage_metrics = true;
  config.modules.gateway = true;
  config.modules.push_notification = true;
  config.modules.ocr = true;
  config.modules.web = true;

  mingle.setConfiguration(config);
  return async () => { await mingle.init(); };
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MingleService,
    { provide: APP_INITIALIZER, useFactory: initalize, deps: [MingleService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
