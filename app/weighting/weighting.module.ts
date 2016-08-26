import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { WeightingComponent } from './weighting.component';
import { WeightingInComponent } from './weighting-in/weighting-in.component';
import { WeightingInFormComponent } from './weighting-in/weighting-in-form.component';
import { InputCarIdDirective } from './directives/car-id.directive';

import { WeightingService } from './weighting.service';

import { weightingRouting } from './weighting.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    weightingRouting

  ],
  declarations: [
    WeightingComponent,
    WeightingInComponent,
    WeightingInFormComponent,
     InputCarIdDirective
  ],
  providers: [
    WeightingService
  ]
})
export class WeightingModule { }

