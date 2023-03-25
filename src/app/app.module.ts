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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SearchpageComponent,
    SearchInputComponent,
    TrackedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
