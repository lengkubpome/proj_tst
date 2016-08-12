import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription }       from 'rxjs/Subscription';
import { WeightingService } from './weighting.service';

@Component({
    selector: 'weighting',
    templateUrl: 'app/weighting/weighting.component.html'
})
export class WeightingComponent implements OnInit, OnDestroy {
    listWeightIn: Object[];
    private sub: Subscription;

    constructor(
        private weightingService: WeightingService
    ) {
        
    }
    ngOnInit() {
        this.listWeightIn = this.weightingService.getWeightIn();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

     isSelected(weightIn: Object) { return console.log(weightIn );}

    onSelect() {
        console.log("Selected!!");

    }
}

