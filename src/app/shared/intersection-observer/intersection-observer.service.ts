import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'intersection-observer';

declare global {
  interface Window {
    IntersectionObserver: IntersectionObserver;
  }
}

@Injectable()
export class IntersectionObserverService {
  observer: IntersectionObserver;
  subject: Subject<{ entry: IntersectionObserverEntry, observer: IntersectionObserver }>;
  observerOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1,
  }

  constructor() {
    if (window.IntersectionObserver) {
      this.subject = new Subject();
      this.observer = new IntersectionObserver(this.observerCallback(), this.observerOptions);
    }
  }

  public observe(target: Element) {
    this.observer.observe(target);
    this.subject = new Subject();
    return this.subject;
  }

  observerCallback(): IntersectionObserverCallback {
    return (entries: IntersectionObserverEntry[], observer) => {
      entries.forEach(entry => this.subject.next({entry, observer}));
    };
  }
}
