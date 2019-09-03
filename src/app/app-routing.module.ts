import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { PlayComponent } from './play/play.component';
import { SwiperComponent } from './swiper/swiper.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
  },
  {
    path: 'play',
    component: PlayComponent,
  },
  {
    path: 'swiper',
    component: SwiperComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    )
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
