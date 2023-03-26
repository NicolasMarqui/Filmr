import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'movies',
    component: MoviesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
