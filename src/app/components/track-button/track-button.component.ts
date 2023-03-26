import { ActivatedRoute } from '@angular/router';
import { IMovieDetail } from './../../_models/index';
import { LocalService } from './../../_services/local.service';
import { Component, Input } from '@angular/core';
import { faFilm, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-track-button',
  templateUrl: './track-button.component.html',
  styleUrls: ['./track-button.component.scss'],
})
export class TrackButtonComponent {
  @Input('movie') movie!: IMovieDetail;
  isBeingTracked: boolean = false;
  filmIcon = faFilm;
  checkIcon = faCheck;
  hasRouteId = this.route.snapshot.paramMap.get('id');

  constructor(private local: LocalService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.checkIfIsBeingTracked();
  }

  startTrackingMovie() {
    const objToSave = {
      id: this.movie.id,
      poster: this.movie.poster_path,
      title: this.movie.title,
      watched: true,
      watchedDate: new Date(),
    };

    const all = JSON.parse(this.local.getData('tracked') || '[]');
    const save = [...all, objToSave];

    this.local.saveData('tracked', JSON.stringify(save));
    this.checkIfIsBeingTracked();
  }

  checkIfIsBeingTracked() {
    const allTrackedMovies = this.local.getData('tracked');
    const movieId = this.hasRouteId ? Number(this.hasRouteId) : this.movie.id;

    if (!allTrackedMovies) return;
    if (this.isBeingTracked) {
      return this.removeFromTracking();
    }

    const parsedTracked = JSON.parse(allTrackedMovies);

    if (parsedTracked) {
      const isTracked = parsedTracked.filter(
        (tracked: any) => tracked.id === movieId
      );

      if (isTracked && isTracked.length > 0) {
        this.isBeingTracked = true;
      }
    }
  }

  removeFromTracking() {
    const all = JSON.parse(this.local.getData('tracked') || '[]');
    const movieId = this.hasRouteId ? Number(this.hasRouteId) : this.movie.id;

    if (all && all.length > 0) {
      const save = all.filter((movie: any) => {
        movie.id !== movieId;
      });

      this.local.saveData('tracked', JSON.stringify(save));
      this.isBeingTracked = false;
      this.checkIfIsBeingTracked();
    }
  }
}
