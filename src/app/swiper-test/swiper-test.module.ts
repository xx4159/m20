import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SwiperTestRoutingModule } from './swiper-test-routing.module';
import { SwiperTestComponent } from './swiper-test.component';
import { SwiperComponent } from './shared/swiper/swiper.component';
import { NavComponent } from './nav/nav.component';
import { SwiperDefaultComponent } from './swiper-default/swiper-default.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SwiperTestRoutingModule,
  ],
  declarations: [
    SwiperTestComponent,
    SwiperComponent,
    NavComponent,
    SwiperDefaultComponent,
    ShareComponent,
  ],
  providers: [
  ]
})
export class SwiperTestModule { }
