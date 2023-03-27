import { MovieService } from './../../_services/movie.service';
import { IMovieDetail } from './../../_models/index';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieDetail } from 'src/app/_utils/mock';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  movieDetail: IMovieDetail = movieDetail;
  backdrop: string = '';
  backdrop_url: string = `https://image.tmdb.org/t/p/original`;
  poster: string = '';
  poster_url: string = `https://image.tmdb.org/t/p/w500`;

  favoriteIcon = faHeart;
  backIcon = faArrowLeft;

  constructor(
    private movie: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.loadMovieDetail();
    //this.poster = `${this.poster_url}/${this.movieDetail.poster_path}`;
    //this.backdrop = `${this.backdrop_url}/${this.movieDetail.backdrop_path}`;
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

  handleGoBack() {
    this.location.back();
  }
}
