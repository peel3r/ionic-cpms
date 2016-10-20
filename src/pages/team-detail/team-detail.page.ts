import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from "ionic-angular";
import * as _ from 'lodash'
// onPageLoaded renamed to ionViewLoaded
// onPageWillEnter renamed to ionViewWillEnter
// onPageDidEnter renamed to ionViewDidEnter
// onPageWillLeave renamed to ionViewWillLeave
// onPageDidLeave renamed to ionViewDidLeave
// onPageWillUnload renamed to ionViewWillUnload
// onPageDidUnload renamed to ionViewDidUnload

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.page.html'
})
export class TeamDetail {
  team: any
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
    console.log(this.team)
  }

  ionViewDidLoad() {
    this.team = this.navParams.data
  }
  }
