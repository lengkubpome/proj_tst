import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing,
  appRoutingProviders } from './app.routing';

// Shared Component
import { ScrollbarComponent } from './shared/scrollbar.component';
// Main Component
import { NavbarComponent } from './navbar.component';
import { WeightingModule } from './weighting/weighting.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    WeightingModule,
    HeroesModule
  ],
  declarations: [
    //Shared Component
    ScrollbarComponent,
    // Main Component
    AppComponent,
    NavbarComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
