//myHighlight- attribute directive
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'pink';
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
