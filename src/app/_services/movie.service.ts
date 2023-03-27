import { IVideosResponse } from './../_models/index';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovieDetail, IMoviesResponse } from '../_models';

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

  getMovieDetail(id: string): Observable<IMovieDetail> {
    return this.http.get<IMovieDetail>(
      `${this.API_URL}/movie/${id}${this.API_KEY}`
    );
  }

  getMovieVideos(id: string): Observable<{ results: IVideosResponse[] }> {
    return this.http.get<{ results: IVideosResponse[] }>(
      `${this.API_URL}/movie/${id}/videos${this.API_KEY}`
    );
  }
}
