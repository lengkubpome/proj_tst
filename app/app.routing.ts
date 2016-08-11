import { Routes, RouterModule } from '@angular/router';

import { WeightingComponent } from './weighting/weighting.component';
import { CustomersComponent } from './customers/customers.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';

const appRoutes: Routes = [
  { path: 'weighting', component: WeightingComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '**', component: WeightingComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);


