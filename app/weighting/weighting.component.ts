import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Subscription }       from 'rxjs/Subscription';
import { WeightingCar, WeightingService } from './weighting.service';
// import { WeightingInComponent } from './weighting-in/weighting-in.component';

@Component({
    selector: 'weighting',
    templateUrl: 'app/weighting/weighting.component.html'
})
export class WeightingComponent implements OnInit, OnDestroy {

    selectCar = new WeightingCar(null, null, null, null, null, null, null, null);

    private createWeightIn: boolean = false;

    constructor(private _weightingService: WeightingService) { }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    onSelect(_weightingIn: WeightingCar) {
        this.selectCar = _weightingIn;
    }

    onShowWeightingIn() {
        this.createWeightIn = !this.createWeightIn;
    }

    onSaveWeightingIn(arg: any) {
        this.createWeightIn = !this.createWeightIn;
        console.log(arg);

        this._weightingService.setNewWeightInCar(1);

    }

    onCancelWeightingIn() {
        this.createWeightIn = false;
    }

}

