import { Component } from '@angular/core';

@Component({
  selector: 'app-tracked-movies',
  templateUrl: './tracked-movies.component.html',
  styleUrls: ['./tracked-movies.component.scss'],
})
export class TrackedMoviesComponent {
  trackedMovies: any[] = [];
}
