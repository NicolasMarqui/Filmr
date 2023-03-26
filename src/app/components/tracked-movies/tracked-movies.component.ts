import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-tracked-movies',
  templateUrl: './tracked-movies.component.html',
  styleUrls: ['./tracked-movies.component.scss'],
})
export class TrackedMoviesComponent {
  trackedMovies: any[] = [];

  options: AnimationOptions = {
    path: '/assets/animations/empty.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
