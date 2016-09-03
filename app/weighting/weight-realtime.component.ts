import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'weight-realtime',
    template: `
         
                   
            <input type="text" 
                class="form-control input-lg" 
                style="text-align: right;font-size: 35px; font-weight: bold;"  
                name="weight"
                disabled
                value="{{weight}}"
            >
   
    `,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WeightRealTimeComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => WeightRealTimeComponent), multi: true }
  ]
})
export class WeightRealTimeComponent implements OnInit {
    private weight: number;

    constructor() { }

    ngOnInit() {
        let timer = Observable.timer(0, 1000);
        timer.subscribe(() => {
            this.weight = _.random(99999);
        });
    }

}