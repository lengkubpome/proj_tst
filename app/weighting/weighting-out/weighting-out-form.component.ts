import { Component, Input } from '@angular/core';
import { WeightingCar } from '../weighting.service';

@Component({

    selector: 'weighting-out',
     templateUrl: 'app/weighting/weighting-out/weighting-out-form.component.html',
})
export class WeightingOutComponent { 
    @Input() car: WeightingCar;

}
