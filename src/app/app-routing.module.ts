import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { GenresComponent } from './genres/genres.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'genres/:genre', component: GenresComponent },
{ path: 'showDetails/:showId', component: ShowDetailsComponent },
{ path: 'shows/:searchShow', component: ShowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
