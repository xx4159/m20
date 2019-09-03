import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HlsPlayerComponent } from '../hls-player/hls-player.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent {
  form = this.fb.group({
    src: '',
    type: 'application/x-mpegURL',
  });

  @ViewChild('playerContainer') playerContainer: HlsPlayerComponent;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  onSubmit(value: any) {
    if (this.playerContainer && this.playerContainer.player) {
      const player = this.playerContainer.player;
      player.pause();
      player.src([value]);
      player.load();
      player.play();
    }
  }
}
