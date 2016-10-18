import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage, Standings, TeamDetail } from '../pages';

@Component({
  templateUrl: 'team-home.page.html',
})
export class TeamHome {
  team: any;
  teamDetailTab = TeamDetail;
  standingsTab = Standings;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.team =  this.navParams.data;
  }

  goHome(){
    //this.nav.push(MyTeamsPage);
    this.nav.popToRoot();
  }
}
