import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ScrollWheelDirective } from './scroll-wheel.directive';
import { SwiperPageRoutingModule } from './swiper-page-routing.module';
import { SwiperPageComponent } from './swiper-page.component';
import { TvComponent } from './tv/tv.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SwiperPageRoutingModule,
  ],
  declarations: [
    ScrollWheelDirective,
    SwiperPageComponent,
    TvComponent,
  ],
  providers: [
  ]
})
export class SwiperPageModule { }
