import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {Game,TournamentsPage,MyTeamsPage,TeamDetail, Teams} from "../pages/pages";



@NgModule({
  declarations: [
    MyApp,
    Game,
    MyTeamsPage,
    TeamDetail,
    Teams,
    TournamentsPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Game,
    MyTeamsPage,
    TeamDetail,
    Teams,
    TournamentsPage


  ],
  providers: []
})
export class AppModule {}
