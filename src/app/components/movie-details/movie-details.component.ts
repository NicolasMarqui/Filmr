import { MovieService } from './../../_services/movie.service';
import { IMovieDetail } from './../../_models/index';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieDetail } from 'src/app/_utils/mock';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  movieDetail: IMovieDetail = {};
  backdrop: string = '';
  backdrop_url: string = `https://image.tmdb.org/t/p/original`;
  poster: string = '';
  poster_url: string = `https://image.tmdb.org/t/p/w500`;
  favoriteIcon = faHeart;

  constructor(private movie: MovieService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadMovieDetail();
  }

  loadMovieDetail() {
    this.movie
      .getMovieDetail(this.route.snapshot.paramMap.get('id') ?? '')
      .subscribe((movie) => {
        this.movieDetail = movie;
        this.backdrop = `${this.backdrop_url}/${movie.backdrop_path}`;
        this.poster = `${this.poster_url}/${movie.poster_path}`;
      });
  }
}
