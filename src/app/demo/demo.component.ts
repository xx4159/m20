import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <ul>
      <li><a [routerLink]="['/play']">angular4 에서 HLS 영상 재생해보기</a></li>
      <li><a [routerLink]="['/swiper']">영상 스와이퍼 UI 테스트</a></li>
    </ul>
  `,
})
export class DemoComponent {
}
