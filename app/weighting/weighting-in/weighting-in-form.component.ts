import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';



import { WeightingCar, WeightingService } from '../weighting.service';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'weighting-in-form',
    templateUrl: 'app/weighting/weighting-in/weighting-in-form.component.html',
    styleUrls: ['app/weighting/weighting-in/weighting-in-form.component.css']
})
export class WeightingInFormComponent implements OnInit {

    myForm: FormGroup;

    @Output() save: EventEmitter<Object> = new EventEmitter(true);
    @Output() cancel = new EventEmitter();

    model = new WeightingCar(12, null, null, null, null, null, null, null);

    products = ['เหล็ก', 'กระดาษ', 'กระป๋อง', 'สังกะสี'];

    private randomNumber: number;

    private ticks = 0;

    constructor(private _weightingService: WeightingService,
        private _fb: FormBuilder) {
            this.myForm = new FormGroup({
                username: new FormControl('Username start.')
            });

    }

    ngOnInit() {
        setTimeout(() => this.randomNumber = _.random(99999), 500);

        let timer = Observable.timer(2000, 1000);
        // timer.subscribe(t => this.ticks = t);
        timer.subscribe(() => this.model.weightIn = _.random(99999));

    }

    onSubmit(data: any) {

        var result = this._weightingService.createWeightInCar(data.value);
        this.save.emit(result);

        // console.log(JSON.stringify(data.value, null, 2));

    }

    onSave() {
        this.save.emit({});
        console.log("Clicked Save");
    }
    onCancel() {
        this.cancel.emit({});
        console.log("Clicked Cancel");

    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}

