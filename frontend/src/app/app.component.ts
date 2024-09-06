import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    TournamentsComponent,
    TeamsComponent,
    LeaderboardComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class AppComponent { }
