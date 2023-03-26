import { ITrackedMovies } from './../../_models/index';
import { LocalService } from './../../_services/local.service';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-tracked-movies',
  templateUrl: './tracked-movies.component.html',
  styleUrls: ['./tracked-movies.component.scss'],
})
export class TrackedMoviesComponent {
  trackedMovies: ITrackedMovies[] = [];

  options: AnimationOptions = {
    path: '/assets/animations/empty.json',
  };

  constructor(private local: LocalService) {}

  ngOnInit() {
    this.fetchTrackedMovies();
  }

  fetchTrackedMovies() {
    const movies = JSON.parse(this.local.getData('tracked') || '[]');
    this.trackedMovies = movies;
  }

  animationCreated(animationItem: AnimationItem): void {}
}
