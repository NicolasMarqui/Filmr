import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TrackedMoviesComponent } from './components/tracked-movies/tracked-movies.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SearchpageComponent,
    SearchInputComponent,
    TrackedMoviesComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
