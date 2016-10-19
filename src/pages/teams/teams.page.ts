import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHome } from '../pages';
import { ManagerApi } from '../../app/shared/manager-api.service'

@Component({
  templateUrl: 'teams.page.html',
})
export class Teams {
  diary = [];
  constructor(private nav: NavController, private navParams: NavParams, private managerApi: ManagerApi) {

    let selectedDiary = this.navParams.data;

    this.managerApi.getDiaryData(selectedDiary._id).subscribe(data => {
      console.log('**data',data)
      this.diary = data;
    })
  }

  itemTapped($event, diary){
    this.nav.push(TeamHome, diary);
  }
}
