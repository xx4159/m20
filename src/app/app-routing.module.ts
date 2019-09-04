import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { PlayComponent } from './play/play.component';

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
    path: 'swiper-test',
    loadChildren: 'app/swiper-test/swiper-test.module.ts#SwiperTestModule'
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
