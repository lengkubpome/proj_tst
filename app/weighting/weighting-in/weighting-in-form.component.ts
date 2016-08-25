import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

import { WeightingCar, WeightingService } from '../weighting.service';
import { WeightingInFormValidators } from '../validations/weightingInFormValidators';
import {Observable} from 'rxjs/Rx';
<<<<<<< HEAD
declare var $:JQueryStatic;
=======

>>>>>>> parent of 296507a... ...

@Component({
    selector: 'weighting-in-form',
    templateUrl: 'app/weighting/weighting-in/weighting-in-form.component.html',
    styleUrls: ['app/weighting/weighting-in/weighting-in-form.component.css']
})
export class WeightingInFormComponent implements OnInit {

    weightingInForm: FormGroup;

    @Output() save: EventEmitter<Object> = new EventEmitter(true);
    @Output() cancel = new EventEmitter();

    model = new WeightingCar(12, null, null, null, null, null, null, null);

    products = ['เหล็ก', 'กระดาษ', 'กระป๋อง', 'สังกะสี'];

    constructor(private _weightingService: WeightingService,
        private _fb: FormBuilder) {
        this.weightingInForm = this._fb.group({
            carId: ['', Validators.compose([
                <any>Validators.required,
                <any>Validators.minLength(6),
                WeightingInFormValidators.cannotContainSpace
            ])
            ],
            customerId: ['', <any>Validators.required],
            dateIn: ['', Validators.pattern('[A-Za-z]{5}')],
            product: ['', Validators.required],
            weight: ['', Validators.required]
        });
    }

    ngOnInit() {

        let timer = Observable.timer(2000, 1000);
        timer.subscribe(() => {
            // TODO: controls has change.
            (<FormControl>this.weightingInForm.controls['weight'])
                .updateValue(_.random(99999), { emitModelToViewChange: true });
        });

    }

    onSubmit(data: any) {

        var result = this._weightingService.createWeightInCar(data.value);
        this.save.emit(result);

        console.log(JSON.stringify(data.value, null, 2));

    }

    onCancel() {
        this.cancel.emit({});
        console.log("Clicked Cancel");

    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}

