import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperPageRoutingModule } from './swiper-page-routing.module';
import { SwiperPageComponent } from './swiper-page.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperPageRoutingModule,
  ],
  declarations: [
    SwiperPageComponent,
  ],
  providers: [
  ]
})
export class SwiperPageModule { }
