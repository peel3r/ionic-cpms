import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TournamentsPage} from "../pages";


@Component({
  selector: 'page-my-teams',
  templateUrl: './my-teams.page.html'
})


export class MyTeamsPage {
  constructor(private nav: NavController) {


  }
  goToTournaments() {
    this.nav.push(TournamentsPage);
  }
}






