import { Component, Input } from '@angular/core';
import { WeightingCar } from '../weighting.service';

@Component({

    selector: 'weighting-out',
    templateUrl: 'app/weighting/weighting-out/weighting-out-form.component.html',
    styleUrls: ['app/weighting/weighting-out/weighting-out-form.component.css']
})
export class WeightingOutComponent {
    @Input() car: WeightingCar;

}
