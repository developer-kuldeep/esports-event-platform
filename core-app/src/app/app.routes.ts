// src/app/app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./core/features/landing/landing.component";
import { LiveStreamsComponent } from "./core/features/live-streams/live-streams.component";
import { TournamentsComponent } from "./core/features/tournaments/tournaments.component";

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'live-streams', component: LiveStreamsComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
