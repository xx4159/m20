import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HlsPlayerComponent } from '../shared/hls-player/hls-player.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent {
  src = 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8';
  form = this.fb.group({
    src: '',
    type: 'application/x-mpegURL',
  });

  @ViewChild('playerContainer') player: HlsPlayerComponent;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  onSubmit(value: any) {
    if (this.player) {
      this.player.changeSrc(this.src);
    }
  }
}
