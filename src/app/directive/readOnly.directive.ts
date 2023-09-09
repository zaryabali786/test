import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appReadonly]'
})

export class HighlightDirective {
    @Input() set appReadonly(value: boolean) {
        if (value) {
            this.renderer.setAttribute(this.el.nativeElement, 'readOnly', "true");
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', "true");
        } else {
            this.renderer.removeAttribute(this.el.nativeElement, 'readOnly');
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
        }
    }


    constructor(private el: ElementRef, private renderer: Renderer2) { }


}