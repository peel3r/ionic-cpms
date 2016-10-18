import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TeamDetail} from "../pages";

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class Teams {

  teams = [
    {id: 1, name: 'goblins'},
    {id: 2, name: 'trolls'},
    {id: 3, name: 'orks'}
  ];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Teams Page');
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamDetail, team)
  }
}
