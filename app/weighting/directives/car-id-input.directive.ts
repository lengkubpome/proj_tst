import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Directive({ selector: '[inputCarID]' })
export class InputCarIdDirective {
    // private _defaultColor = 'red';
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        Observable.fromEvent(this.el, 'keyup')
            .map(e => {
                // let v = e.target.value
                // e.target.value = 'xxxx';
            })
            .subscribe(data => console.log(data));

    }

    // @Input() set defaultColor(colorName: string) {
    //     this._defaultColor = colorName || this._defaultColor;
    // }

    // @Input('myHighlight') highlightColor: string;

    // @HostListener('mouseenter') onMouseEnter() {
    //     this.highlight(this.highlightColor || this._defaultColor);
    // }
    // @HostListener('mouseleave') onMouseLeave() {
    //     this.highlight(null);
    // }

    // @HostListener('keyup') onkeyup() {
    //     console.log(this.el);

    // }

    // private highlight(color: string) {
    //     this.el.style.backgroundColor = color;
    // }
}
