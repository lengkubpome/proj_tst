import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import {Observable} from 'rxjs/Observable';



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
  };
}


@Component({
  moduleId: module.id,
  selector: 'weight-realtime',
  template: `
      <input type="text" 
        class="form-control input-lg" 
        style="text-align: right;font-size: 35px; font-weight: bold;"  
        name="weight"
        disabled
        [(ngModel)]="weight"
                  > 
    `,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WeightComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => WeightComponent), multi: true }
  ]
})
export class WeightComponent implements OnInit, ControlValueAccessor, OnChanges {

  weight: number;

  propagateChange: any = () => { };
  validateFn: any = () => { };

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0, 1000);
    timer.subscribe(() => {
      this.weight = _.random(99999);
      this.propagateChange(this.weight);
    });
  }

  ngOnChanges(inputs: any) {
    // if (inputs.counterRangeMax || inputs.counterRangeMin) {
    //   this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    // }
  }

  writeValue(value: any) {
    if (value) {
      this.weight = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;

  }

  registerOnTouched() {

  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }


}
