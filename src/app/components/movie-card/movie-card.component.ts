import { IPopularMovies } from './../../_models/index';
import { Component, Input } from '@angular/core';
import { faHeart, faCheck, faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input('movie') movie!: IPopularMovies;

  favoriteIcon = faHeart;
  checkIcon = faCheck;
  filmIcon = faFilm;

  poster: string = '';
  poster_url: string = `https://image.tmdb.org/t/p/w500`;

  ngOnInit() {
    this.poster = `${this.poster_url}/${this.movie?.poster_path}`;
  }
}
