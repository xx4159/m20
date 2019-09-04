import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { SwiperPageRoutingModule } from './swiper-page-routing.module';
import { SwiperPageComponent } from './swiper-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SwiperPageRoutingModule,
  ],
  declarations: [
    SwiperPageComponent,
  ],
  providers: [
  ]
})
export class SwiperPageModule { }
