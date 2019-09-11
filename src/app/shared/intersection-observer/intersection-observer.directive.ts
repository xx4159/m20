import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { IntersectionObserverService } from './intersection-observer.service';

@Directive({
  selector: '[appIntersectionObserver]',
  providers: [IntersectionObserverService],
})
export class IntersectionObserverDirective {
  target: Element;
  initialized = false;

  @Output() inview = new EventEmitter<{ entry: IntersectionObserverEntry, observer: IntersectionObserver }>();
  @Output() outview = new EventEmitter<{ entry: IntersectionObserverEntry, observer: IntersectionObserver }>();

  constructor(
    private elementRef: ElementRef,
    private intersectionObserverService: IntersectionObserverService
  ) {
    this.target = this.elementRef.nativeElement;
    this.intersectionObserverService.observe(this.target).subscribe(res => {
      const { entry, observer } = res;
      if (entry.intersectionRatio === 1) {
        this.inview.emit({ entry, observer });
      } else {
        // observer.unobserve(this.target);
        // observer.observe(this.target);
        this.outview.emit({ entry, observer });
      }
    });
  }
}
