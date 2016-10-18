import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TeamDetail} from "../pages";

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class Teams {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Teams Page');
  }

  itemTapped() {
    this.navCtrl.push(TeamDetail)
  }
}
