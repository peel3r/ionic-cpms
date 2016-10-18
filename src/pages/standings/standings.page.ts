import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Standings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.page.html'
})
export class Standings {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Standings Page');
  }

}
