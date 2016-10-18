import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {MyTeamsPage} from "../pages/pages";
import {TournamentsPage} from "../pages/tournaments/tournaments.page";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Page One', component: Page1 },
    //   { title: 'Page Two', component: Page2 }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  goHome() {
    this.nav.push(MyTeamsPage);
  }

  goToTournaments() {
    this.nav.push(TournamentsPage)
  }
}
