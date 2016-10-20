import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Teams } from "../pages";
import { ManagerApi } from '../../app/shared/shared'
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  diaries: any;
  constructor(public navCtrl: NavController,
              private managerApi: ManagerApi,
              private loadingController: LoadingController
  ) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'getting data'
    })

    loader.present().then(() => {
      console.log('Hello Tournaments Page');
      this.managerApi.getDiaries().then(data => {
        this.diaries = data;
        loader.dismiss();
      })
    })


  }



  itemTapped($event, diary) {
    this.navCtrl.push(Teams, diary)
  }

}
