import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {Game,TournamentsPage,MyTeamsPage,TeamDetail, Teams} from "../pages/pages";
import {TeamHome} from "../pages/team-home/team-home.page";
import {Standings} from "../pages/standings/standings.page";
// import {enableProdMode} from "@angular/core";

// enableProdMode()

@NgModule({
  declarations: [
    MyApp,
    Game,
    MyTeamsPage,
    TeamDetail,
    Teams,
    TournamentsPage,
    TeamHome,
    Standings

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
    TournamentsPage,
    TeamHome,
    Standings

  ],
  providers: []
})
export class AppModule {}
