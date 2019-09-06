import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-swiper-page',
  template: `
  <div scrollWheel (scrollTo)="pageTo($event)" [@routeAnimations]="prepareRoute(outlet)">
    <router-outlet #outlet="outlet"></router-outlet>
  </div>
  `,
  animations: [
    routeAnimations,
  ],
})
export class SwiperPageComponent {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.firstChild.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  pageTo(direction: string) {
    const nextPage = direction === 'next' ? ++this.id : --this.id;
    this.router.navigate([`${nextPage}`], { relativeTo: this.route });
  }

  prepareRoute(outlet: RouterOutlet) {
    return {
      value: outlet.activatedRoute.snapshot.params.id
    };
  }
}
