import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-hls-player',
  template: `
    <video id="player" class="video-js" controls muted autoplay playsinline>
      <source src="https://29cm-media-upload.s3.ap-northeast-2.amazonaws.com/converted/IMG_8638.m3u8" type="application/x-mpegURL">
    </video>
  `,
  styleUrls: [
    './hls-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HlsPlayerComponent implements OnInit {
  public player: videojs.Player;

  constructor() { }

  ngOnInit() {
    this.player = videojs('player', { fluid: true, aspectRatio: '9:16' });
  }
}
