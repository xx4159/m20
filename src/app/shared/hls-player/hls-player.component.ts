import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-hls-player',
  template: `
    <video #target class="video-js" controls muted playsinline></video>
  `,
  styleUrls: [
    './hls-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HlsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target') target: ElementRef;
  @Input() src: string;
  @Input() autoplay = false;
  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.player = videojs(this.target.nativeElement, { fluid: true, aspectRatio: '9:16', autoplay: this.autoplay });
    this.player.src({ src: this.src, type: 'application/x-mpegURL'});
    this.player.load();
  }

  ngOnDestroy() {
    this.player.dispose();
  }

  public changeSrc(src: string) {
    this.player.pause();
    this.player.src({ src: this.src, type: 'application/x-mpegURL'});
    this.player.load();
  }

  public play() {
    console.log('PLAY --', this.player);
    this.player.play();
  }

  public pause() {
    console.log('PAUSE --', this.player);
    this.player.pause();
  }
}
