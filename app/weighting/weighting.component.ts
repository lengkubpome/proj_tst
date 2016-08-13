import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription }       from 'rxjs/Subscription';
import { WeightingCar, WeightingService } from './weighting.service';

@Component({
    selector: 'weighting',
    templateUrl: 'app/weighting/weighting.component.html',
})
export class WeightingComponent implements OnInit, OnDestroy {
    private listWeightIn: WeightingCar[];

    weightInCount:number;
    selectCar: WeightingCar;
    selectCarId: string;
    selectCarProduct: string;

    constructor(private _weightingService: WeightingService) {
 
    }



    getListWeightIn() {
        this._weightingService.getListWiegtingIn()
            .then(listWeightIn => this.listWeightIn = listWeightIn);
                
    }

    ngOnInit() {
        this.getListWeightIn();

    }
    ngOnDestroy() {

    }

    onSelect(weightingIn: WeightingCar) {
        this.selectCarId = weightingIn.carId;
        this.selectCarProduct = weightingIn.product;

    }
}

