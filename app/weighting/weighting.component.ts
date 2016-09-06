import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Subscription }       from 'rxjs/Subscription';
import { WeightingCar, WeightingService } from './weighting.service';
// import { WeightingInComponent } from './weighting-in/weighting-in.component';

@Component({
    selector: 'weighting',
    templateUrl: 'app/weighting/weighting.component.html'
})
export class WeightingComponent implements OnInit, OnDestroy {


    private selectCar: WeightingCar;

    private createWeightIn: boolean = false;
    private showWeightOut: boolean = false;

    constructor(private _weightingService: WeightingService) { }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    selectWeightingIn(_weightingIn: WeightingCar) {
        this.selectCar = _weightingIn;
        this.showWeightOut = true;
        if (this.createWeightIn) {
            this.createWeightIn = !this.createWeightIn;
        }
    }

    newWeightingInForm() {
        this.createWeightIn = !this.createWeightIn;
        if (this.showWeightOut) {
            this.showWeightOut = !this.showWeightOut;
        }
    }

    onSaveWeightingIn(result: any) {
        if (result !== Error) {
            this.createWeightIn = !this.createWeightIn;
        }
    }

    onCancelWeightingIn() {
        this.createWeightIn = false;
    }

}

