import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperRoutingModule } from './swiper-routing.module';
import { SwiperComponent } from './swiper.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperRoutingModule,
  ],
  declarations: [
    SwiperComponent,
    NavComponent,
  ],
  providers: [
  ]
})
export class SwiperModule { }
