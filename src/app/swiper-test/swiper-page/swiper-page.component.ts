import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-swiper-page',
  template: `
  <div [@routeAnimations]="prepareRoute(outlet)">
    <router-outlet #outlet="outlet"></router-outlet>
  </div>
  `,
  animations: [
    slideInAnimation,
  ]
})
export class SwiperPageComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRoute.snapshot.params.id;
  }
}
