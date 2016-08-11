import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent }  from './app.component';
import { routing,
  appRoutingProviders } from './app.routing';

import { NavbarComponent } from './navbar.component';
import { WeightingModule } from './weighting/weighting.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    WeightingModule,
    HeroesModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { AppComponent }       from './app.component';
// import { routing,
//          appRoutingProviders } from './app.routing';

// import { HeroListComponent }    from './hero-list.component';
// import { CrisisListComponent }  from './crisis-list.component';

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     routing
//   ],
//   declarations: [
//     AppComponent,
//     HeroListComponent,
//     CrisisListComponent
//   ],
//   providers: [
//     appRoutingProviders
//   ],
//   bootstrap: [ AppComponent ]
// })

