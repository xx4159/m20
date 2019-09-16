import { Component, EventEmitter, ViewEncapsulation, AfterContentInit, Input, Output } from '@angular/core';
import Swiper from 'swiper/dist/js/swiper.js';

@Component({
  selector: 'app-swiper',
  template: `
  <!-- Slider main container -->
  <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <ng-content></ng-content>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </div>
  `,
  styleUrls: [
    './swiper.component.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements AfterContentInit {
  swiper: Swiper;

  @Input() initialSlide: number;
  @Output('slideChangeTransitionStart') slideChangeTransitionStart = new EventEmitter<Swiper>();
  @Output('slideChangeTransitionEnd') slideChangeTransitionEnd = new EventEmitter<Swiper>();

  constructor() { }

  ngAfterContentInit() {
    this.swiper = new Swiper('.swiper-container', {
      initialSlide: this.initialSlide,
      direction: 'vertical',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChangeTransitionStart: () => {
          // initialSlide 가 0이 아닐 때 N번째 슬라이드로 이동하면서 transition 이벤트가 발생하고 `this.swiper`가 `null`로 나온다
          if (this.swiper) {
            this.slideChangeTransitionStart.emit(this.swiper);
          }
        },
        slideChangeTransitionEnd: () => {
          if (this.swiper) {
            this.slideChangeTransitionEnd.emit(this.swiper);
          }
        },
      }
      // replaceState 가 `false` 라서 뒤로가기 하면 이전 슬라이드로 이동
      // hashNavigation: true

      // replaceState 를 `true` 로 하면 뒤로가기가 안되긴 하지만 path가 바뀜 (/swiper => /#slide1)
      // hashNavigation: {
      //   replaceState: true,
      // },
    });
  }
}
