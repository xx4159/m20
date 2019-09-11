import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HlsPlayerComponent } from '../../shared/hls-player/hls-player.component';
import videojs from 'video.js';

@Component({
  selector: 'app-swiper-default',
  template: `
  <app-swiper (slideChangeTransitionStart)="onslideChangeTransitionStart($event)" (slideChangeTransitionEnd)="onslideChangeTransitionEnd($event)">
    <div class="swiper-slide" *ngFor="let item of data">
      <app-hls-player #playerContainer [src]="item"></app-hls-player>
    </div>
    <div class="swiper-slide">Slide 3</div>
  </app-swiper>
  `
})
export class SwiperDefaultComponent implements AfterViewInit {
  @ViewChildren('playerContainer') playerContainer: QueryList<HlsPlayerComponent>;
  players: HlsPlayerComponent[];
  data = [
    'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
    'https://29cm-media-upload.s3.ap-northeast-2.amazonaws.com/converted/IMG_8638.m3u8',
  ];

  constructor(
  ) {
  }

  ngAfterViewInit() {
    console.log('PLAYERS --', videojs.getPlayers())
    this.players = this.playerContainer.toArray();
    const player = this.players[0];
    player.play();
  }

  onslideChangeTransitionStart(swiper) {
    const { previousIndex } = swiper;
    const player = this.players[previousIndex];
    player.pause();
  }

  onslideChangeTransitionEnd(swiper) {
    const { activeIndex } = swiper;
    const player = this.players[activeIndex];
    player.play();
  }
}
