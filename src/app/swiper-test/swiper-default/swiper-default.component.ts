import { Component, ViewChildren, QueryList, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HlsPlayerComponent } from '../../shared/hls-player/hls-player.component';
import videojs from 'video.js';

@Component({
  selector: 'app-swiper-default',
  template: `
  <app-swiper [initialSlide]="id" (slideChangeTransitionStart)="onslideChangeTransitionStart($event)" (slideChangeTransitionEnd)="onslideChangeTransitionEnd($event)">
    <div class="swiper-slide" *ngFor="let item of data">
      <app-hls-player #playerContainer [src]="item"></app-hls-player>
    </div>
  </app-swiper>
  `
})
export class SwiperDefaultComponent implements OnInit, AfterViewInit {
  @ViewChildren('playerContainer') playerContainer: QueryList<HlsPlayerComponent>;
  players: HlsPlayerComponent[];
  id: number;
  data = [
    'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8',
    'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
    'https://29cm-media-upload.s3.ap-northeast-2.amazonaws.com/converted/IMG_8638.m3u8',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

  ngAfterViewInit() {
    console.log('PLAYERS --', videojs.getPlayers())
    this.players = this.playerContainer.toArray();
    const player = this.players[this.id];
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
    this.router.navigate(['swiper-test', activeIndex], { replaceUrl: true });
  }
}
