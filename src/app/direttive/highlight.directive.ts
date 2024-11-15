import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
