import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Teams } from "../pages";
import { ManagerApi } from '../../app/shared/shared'
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  diaries: any;
  constructor(public navCtrl: NavController, private managerApi: ManagerApi) {}

  ionViewDidLoad() {
    console.log('Hello Tournaments Page');
    this.managerApi.getDiaries().then(data => this.diaries = data)

  }



  itemTapped($event, diary) {
    this.navCtrl.push(Teams, diary)
  }

}
