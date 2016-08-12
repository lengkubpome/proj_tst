import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing,
  appRoutingProviders } from './app.routing';
  
import { WeightingComponent } from './weighting/weighting.component';
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
    NavbarComponent,
    WeightingComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
