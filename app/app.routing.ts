import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';

const appRoutes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: '**', component: CustomersComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);


