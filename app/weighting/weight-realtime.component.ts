import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
// import {Observable} from 'rxjs/Observable';



export function createCounterRangeValidator(maxValue: any, minValue: any) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err : null;
  }
}


@Component({
  moduleId: module.id,
  selector: 'weight-realtime',
  template: `
         
            <input type="button" (click)="increase()" value="+"> {{counterValue}} <button (click)="decrease()">-</button>       
<!--          
            <input type="text" 
                class="form-control input-lg" 
                style="text-align: right;font-size: 35px; font-weight: bold;"  
                name="weight"
                disabled
                value="{{weight}}"
            >
-->
    `,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WeightRealTimeComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => WeightRealTimeComponent), multi: true }
  ]
})
export class WeightRealTimeComponent implements OnInit, ControlValueAccessor, OnChanges {

  private weight: number;

  constructor() { }

  ngOnInit() {
    // let timer = Observable.timer(0, 1000);
    // timer.subscribe(() => {
    //     this.weight = _.random(99999);
    // });
  }

  //   writeValue(value :any) {
  //   if (value) {
  //     this.weight = 99999;
  //   }
  // }

  // registerOnChange(fn:any) {
  //   this.propagateChange = fn;
  // }

  // registerOnTouched() {}

  propagateChange: any = () => { };
  validateFn: any = () => { };
  @Input('counterValue') _counterValue = 0;
  @Input() counterRangeMax: any;
  @Input() counterRangeMin: any;

  get counterValue() {
    return this._counterValue;

  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs: any) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  writeValue(value: any) {
    if (value) {
      this.counterValue = value;
      

    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;


  }

  registerOnTouched() {

  }

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue--;
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }


}