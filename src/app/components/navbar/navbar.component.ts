import { Component, HostListener } from '@angular/core';
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    if (window.pageYOffset > 100) {
      element.classList.add('header__fixed');
    } else {
      element.classList.remove('header__fixed');
    }
  }
}
