import { Routes, RouterModule } from '@angular/router';

import { WeightingComponent } from './weighting/weighting.component';
import { CustomersComponent } from './customers/customers.component';

const appRoutes: Routes = [
  { path: 'weighting', component: WeightingComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '**', component: WeightingComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);


