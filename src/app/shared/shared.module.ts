import { NgModule } from '@angular/core';

import { HlsPlayerComponent } from './hls-player/hls-player.component';
import { IntersectionObserverDirective } from './intersection-observer/intersection-observer.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    HlsPlayerComponent,
    IntersectionObserverDirective,
  ],
  exports: [
    HlsPlayerComponent,
    IntersectionObserverDirective,
  ],
  providers: [
  ]
})
export class SharedModule { }
