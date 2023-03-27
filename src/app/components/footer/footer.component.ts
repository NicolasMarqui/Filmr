import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  options: AnimationOptions = {
    path: '/assets/animations/popcorn.json',
  };

  animationCreated(animationItem: AnimationItem): void {}
}
