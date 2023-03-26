import { ITrackedMovies } from './../../_models/index';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card-simplified',
  templateUrl: './movie-card-simplified.component.html',
  styleUrls: ['./movie-card-simplified.component.scss'],
})
export class MovieCardSimplifiedComponent {
  @Input('movie') movie!: ITrackedMovies;

  poster: string = '';
  poster_url: string = `https://image.tmdb.org/t/p/w500`;

  ngOnInit() {
    this.poster = `${this.poster_url}/${this.movie?.poster}`;
  }
}
