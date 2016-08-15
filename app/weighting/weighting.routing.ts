import { Routes, RouterModule } from '@angular/router';

import { WeightingComponent }  from './weighting.component';

const weightingRoutes: Routes = [
  { path: 'weighting',  component: WeightingComponent }
];

export const weightingRouting = RouterModule.forChild(weightingRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/