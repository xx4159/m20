import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';
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
  ],
})
export class SwiperPageComponent {
  id: number;
  private delay = 1300;
  private _lastAnim = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  @HostListener('mousewheel', ['$event']) mousewheel(event: WheelEvent) {
    this.scroll(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) DOMMouseScroll(event: WheelEvent) {
    this.scroll(event);
  }

  @HostListener('onmousewheel', ['$event']) onmousewheel(event: WheelEvent) {
    this.scroll(event);
  }

  @HostListener('document:keyup', ['$event']) onkeyup(event: KeyboardEvent) {
    if (event.which === 40 || event.which === 39) {
      this.pageTo('next');
    }
    if (event.which === 38 || event.which === 37) {
      this.pageTo('prev');
    }
  }

  ngOnInit() {
    this.route.firstChild.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  scroll(event: WheelEvent) {
    event.preventDefault();
    const now = (new Date()).getTime();
    const deltaY = -event.wheelDelta || event.detail;
    const direction = deltaY > 0 ? 'next' : 'prev';
    if (now - this._lastAnim < this.delay) {
      event.preventDefault();
      return;
    }
    this._lastAnim = now;
    this.pageTo(direction);
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
