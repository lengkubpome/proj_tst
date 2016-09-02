import { Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Directive({ selector: '[inputCarID]' })
export class InputCarIdDirective {
    // private _defaultColor = 'red';
    private el: HTMLElement;

    constructor(private _el: ElementRef, private _renderer: Renderer) {
        this.el = _el.nativeElement;
        //     Observable.fromEvent(this.el, 'keyup')
        //         .map(e => {
        //             // let v = e.target.value
        //             // e.target.value = 'xxxx';
        //         })
        //         .subscribe(data => console.log(data));

    }


    // formValidator(val: FormControl): any {
    //     console.log('formValidator ' + val.value);

    //     if (val.value.match(/.*[^0-9].*/)) {
    //         console.log('match');

    //         return { inval: true };
    //     }
    // }

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

    @HostListener('keypress') onkeyup() {
        // console.log(this.el);

    }


    // private highlight() {
    //     this._renderer.setText(this.el, 'ddddd');
    // }
}
