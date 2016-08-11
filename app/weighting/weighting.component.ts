import { Component, OnInit } from '@angular/core';
import { WeightingService } from './weighting.service';

@Component({
    selector: 'weighting',
    templateUrl: '../app/weighting/weighting.component.html',
    providers: [WeightingService]
})
export class WeightingComponent implements OnInit {
    listWeightIn: Object[];

    constructor(weightingService: WeightingService) {
        this.listWeightIn = weightingService.getWeightIn();
    }
    ngOnInit() {

    }
}

