import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ActivatedRoute } from '@angular/router';
import { IPopularMovies } from './../../_models/index';
import { MovieService } from './../../_services/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  results: IPopularMovies[] = [];
  query: string = '';
  isLoading: boolean = true;

  options: AnimationOptions = {
    path: '/assets/animations/noResults.json',
  };

  optionsMovie: AnimationOptions = {
    path: '/assets/animations/movie.json',
  };

  optionsLoading: AnimationOptions = {
    path: '/assets/animations/movie.json',
  };

  constructor(private _movie: MovieService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.isLoading = true;

      this.fetchSearchedMovies(this.query);
    });
  }

  ngOnInit() {}

  fetchSearchedMovies(query: string) {
    if (!query) {
      this.isLoading = false;
      return;
    }

    this._movie.searchMovies(query).subscribe((movie) => {
      this.isLoading = false;
      this.results = movie.results;
    });
  }

  animationCreated(animationItem: AnimationItem): void {}
}
