import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { WeightingComponent } from './weighting.component';
import { WeightingInComponent } from './weighting-in/weighting-in.component';
import { WeightingInFormComponent } from './weighting-in/weighting-in-form.component';

import { WeightingService } from './weighting.service';

import { weightingRouting } from './weighting.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    weightingRouting
  ],
  declarations: [
    WeightingComponent,
    WeightingInComponent,
    WeightingInFormComponent
  ],
  providers: [
    WeightingService
  ]
})
export class WeightingModule { }

