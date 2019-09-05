import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HlsPlayerComponent } from './hls-player/hls-player.component';

@NgModule({
  imports: [
  ],
  declarations: [
    HlsPlayerComponent,
  ],
  exports: [
    HlsPlayerComponent,
  ],
  providers: [
  ]
})
export class SharedModule { }