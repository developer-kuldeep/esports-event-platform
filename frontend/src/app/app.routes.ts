import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
