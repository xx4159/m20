import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: '[scrollWheel]' })
export class ScrollWheelDirective {

    @Input() delay = 1500;
    @Input() enable = true;
    @Output() scrollTo = new EventEmitter<string>();

    _lastAnim = 0;

    @HostListener('mousewheel', ['$event']) mousewheel(event: WheelEvent) {
        this.scroll(event);
    }

    @HostListener('DOMMouseScroll', ['$event']) DOMMouseScroll(event: WheelEvent) {
        this.scroll(event);
    }

    @HostListener('onmousewheel', ['$event']) onmousewheel(event: WheelEvent) {
        this.scroll(event);
    }

    @HostListener('document:keyup', ['$event']) onkeyup(event: KeyboardEvent) {
        if (!this.enable) {
            return;
        }
        if (event.which === 40 || event.which === 39) {
            this.scrollTo.emit('next');
        }
        if (event.which === 38 || event.which === 37) {
            this.scrollTo.emit('prev');
        }
    }

    scroll(event: WheelEvent) {
        if (!this.enable) {
            return;
        }
        event.preventDefault();

        const now = (new Date()).getTime();
        const deltaY = -event.wheelDelta || event.detail;
        const direction = deltaY > 0 ? 'next' : 'prev';

        if (now - this._lastAnim < this.delay) {
            event.preventDefault();
            return;
        }
        this._lastAnim = now;
        this.scrollTo.emit(direction);
    }
}
