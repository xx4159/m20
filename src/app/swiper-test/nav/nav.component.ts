import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <div class="nav">
    <a [routerLink]="['/swiper-test']">default</a>
    <a [routerLink]="['/swiper-test/page']">page</a>
  </div>
  `,
  styles: [
    `
    .nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      transform: translate3d(0,0,0);
      height: 60px;
      background: #fff;
      border-top: 1px solid #e8e8e8;
    }
    `
  ]
})
export class NavComponent {
}
