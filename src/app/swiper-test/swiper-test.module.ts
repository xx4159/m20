import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperTestRoutingModule } from './swiper-test-routing.module';
import { SwiperTestComponent } from './swiper-test.component';
import { SwiperComponent } from './shared/swiper/swiper.component';
import { NavComponent } from './nav/nav.component';
import { SwiperDefaultComponent } from './swiper-default/swiper-default.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperTestRoutingModule,
  ],
  declarations: [
    SwiperTestComponent,
    SwiperComponent,
    NavComponent,
    SwiperDefaultComponent,
  ],
  providers: [
  ]
})
export class SwiperTestModule { }
