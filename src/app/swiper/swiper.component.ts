import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/dist/js/swiper.js';

@Component({
  selector: 'app-swiper',
  template: `
  <!-- Slider main container -->
  <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
  </div>
  `,
  styleUrls: [
    './swiper.component.css',
  ],
})
export class SwiperComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // replaceState 가 `false` 라서 뒤로가기 하면 이전 슬라이드로 이동
      // hashNavigation: true

      // replaceState 를 `true` 로 하면 뒤로가기가 안되긴 하지만 path가 바뀜 (/swiper => /#slide1)
      // hashNavigation: {
      //   replaceState: true,
      // },
    });
  }
}
