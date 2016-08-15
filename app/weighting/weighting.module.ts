import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { WeightingComponent } from './weighting.component';
import { WeightingService } from './weighting.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    // WeightingComponent
  ],
  providers: [
    WeightingService
  ]
})
export class WeightingModule { }

