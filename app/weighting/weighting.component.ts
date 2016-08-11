import { Component, OnInit } from '@angular/core';
import { WeightingService } from './weighting.service';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'weighting',
    templateUrl: 'app/weighting/weighting.component.html'
})
export class WeightingComponent implements OnInit {
    listWeightIn: Object[];

    constructor(weightingService: WeightingService) {
        this.listWeightIn = weightingService.getWeightIn();
    }
    ngOnInit() {

    }
}

