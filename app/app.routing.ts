import { Routes, RouterModule } from '@angular/router';

import { WeightingComponent } from './weighting/weighting.component';

const appRoutes: Routes = [
  { path: 'weighting', component: WeightingComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: {
//       title: 'Heroes List'
//     }
//   },
//   { path: 'hero/:id', component: HeroDetailComponent },
  { path: '**', component: WeightingComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
