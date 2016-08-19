import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

import { WeightingCar, WeightingService } from '../weighting.service';
import { Subscription }       from 'rxjs/Subscription';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'weighting-in-form',
    templateUrl: 'app/weighting/weighting-in/weighting-in-form.component.html',
    styleUrls: ['app/weighting/weighting-in/weighting-in-form.component.css']
})
export class WeightingInFormComponent implements OnInit, OnDestroy {

    @Output() save: EventEmitter<Object> = new EventEmitter();
    @Output() cancel = new EventEmitter();

    model = new WeightingCar(12, null, null, null, null, null, null, null);

    products = ['เหล็ก', 'กระดาษ', 'กระป๋อง', 'สังกะสี'];

    private randomNumber: number;

    ticks = 0;
    ngOnInit() {
        setTimeout(() => this.randomNumber = _.random(99999), 500);

        let timer = Observable.timer(2000, 1000);
        // timer.subscribe(t => this.ticks = t);
        timer.subscribe(() => this.model.weightIn = _.random(99999));
    }
    ngOnDestroy() {

    }

    onSubmit(data: any) {
        // this.save.emit(data.form);
        console.log(this.save.subscribe(null,"error","complet"));
        


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

