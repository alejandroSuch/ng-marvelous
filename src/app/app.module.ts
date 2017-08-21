import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './heroes.service';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesListItemComponent } from './heroes-list/heroes-list-item/heroes-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
