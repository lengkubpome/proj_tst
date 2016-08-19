import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription }       from 'rxjs/Subscription';
import { WeightingCar, WeightingService } from './weighting.service';

@Component({
    selector: 'weighting',
    templateUrl: 'app/weighting/weighting.component.html'
})
export class WeightingComponent implements OnInit, OnDestroy {
    private listWeightIn: Object[];

    weightInLenth: number;
    selectCar = new WeightingCar(null, null, null, null, null, null, null, null);

    constructor(private _weightingService: WeightingService) { }

    getListWeightIn() {
        this._weightingService.getListWiegtingIn()
            .then(listWeightIn => this.listWeightIn = listWeightIn);

        this._weightingService.getLength()
            .then(length => this.weightInLenth = length);
    }

    ngOnInit() {
        this.getListWeightIn();

    }
    ngOnDestroy() {

    }

    onSelect(_weightingIn: WeightingCar) {
        this.selectCar = _weightingIn;

    }

    private createWeightIn: boolean = false;
    onShowWeightingIn() {
        this.createWeightIn = !this.createWeightIn;
    }

    onSaveWeightingIn(arg: any) {
        this.createWeightIn = !this.createWeightIn;
        console.log(arg);


    }

    onCancelWeightingIn() {
        this.createWeightIn = false;
    }

}

