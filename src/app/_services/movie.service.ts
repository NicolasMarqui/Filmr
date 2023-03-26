import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMoviesResponse, IPopularMovies } from '../_models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL: string = 'https://api.themoviedb.org/3';
  private API_KEY: string = '?api_key=8d39ecbb90f8779a25effbbda999db32'; // TODO - Add to env

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<IMoviesResponse> {
    return this.http
      .get<IMoviesResponse>(`${this.API_URL}/movie/popular${this.API_KEY}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
