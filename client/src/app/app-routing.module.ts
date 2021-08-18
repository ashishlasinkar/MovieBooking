import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:movieName', component: MoviesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
