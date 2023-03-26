import { IPopularMovies } from './../../_models/index';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input('movie') movie!: IPopularMovies;

  poster = '';

  ngOnInit() {
    console.log(this.movie.poster_path);
    this.poster = `${this.poster_url}/${this.movie?.poster_path}`;
  }

  poster_url = `https://image.tmdb.org/t/p/w500`;
}
