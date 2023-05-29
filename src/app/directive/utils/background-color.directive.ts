import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColorDirective {
  constructor(private element: ElementRef) {}

  @Input('appBackgroundColor') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
