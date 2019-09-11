import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SwiperTestComponent } from './swiper-test.component';
import { SwiperDefaultComponent } from './swiper-default/swiper-default.component';

const routes: Routes = [
  {
    path: '',
    component: SwiperTestComponent,
    children: [
      {
        path: ':id',
        component: SwiperDefaultComponent,
      },
      {
        path: 'page',
        loadChildren: 'app/swiper-test/swiper-page/swiper-page.module.ts#SwiperPageModule',
      },
    ]
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
export class SwiperTestRoutingModule {}
