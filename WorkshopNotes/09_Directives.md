////////////////////////////////////////////////////////
// 1. this is attribute directive
<p myHighlight>Highlight me!</p>
//myHighlight- attribute directive

import { Directive, ElementRef} from '@angular/core';
@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'pink';
    }
}

////////////////////////////////////////////////////////
// 2. Here we are adding event to our directive
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

////////////////////////////////////////////////////////
// 3. Here we are adding event to our directive
Use case 3:Pass values into the directive with an @Input data binding

 <p [myHighlight]="color">Highlight me!</p>

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('myHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}