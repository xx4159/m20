import { Component } from '@angular/core';

@Component({
  selector: 'app-swiper-test',
  template: `
  <a *ngFor="let item of data" [routerLink]="[item.id]">{{ item.src }}<br><br></a>
  <router-outlet></router-outlet>
  <app-nav></app-nav>
  `,
  styles: [
    `
    a { word-break: break-all }
    `
  ]
})
export class SwiperTestComponent {
  data = [
    {
      id: 'a',
      src: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8',
    },
    {
      id: 'b',
      src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
    },
    {
      id: 'c',
      src: 'https://29cm-media-upload.s3.ap-northeast-2.amazonaws.com/converted/IMG_8638.m3u8',
    },
  ];
}
