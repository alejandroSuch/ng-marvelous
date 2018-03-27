import { WelcomeComponent } from './components/welcome/welcome.component';
import { CustomMaterialModule } from './CustomMaterialModule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MoviesModule } from './movies/movies.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlanetsModule } from './planets/planets.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CustomMaterialModule,
    MoviesModule,
    PlanetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
