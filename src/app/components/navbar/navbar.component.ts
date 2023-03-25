import { Component } from '@angular/core';
import {
  faHome,
  faHeart,
  faFilm,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  homeIcon = faHome;
  favouriteIcon = faHeart;
  filmIcon = faFilm;
  userIcon = faUser;
  searchIcon = faSearch;
}
