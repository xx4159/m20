import { Component } from '@angular/core';

@Component({
  selector: 'share',
  template: `
  <a [routerLink]="['../']">팝업 닫기</a>
  `,
  styles: [
  `
  :host {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;
  }
  `
  ],
})
export class ShareComponent {

}
