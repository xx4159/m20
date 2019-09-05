import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SwiperPageComponent } from './swiper-page.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {
    path: '',
    component: SwiperPageComponent,
    children: [
      {
        path: ':id',
        component: TvComponent
      },
      {
        path: '',
        component: TvComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule,
  ]
})
export class SwiperPageRoutingModule {}
