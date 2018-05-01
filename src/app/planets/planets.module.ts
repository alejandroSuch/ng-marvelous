import { PlanetsRoutingModule } from './planets-rouing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlanetRepositoryService } from './planet-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from '../planets/list/item/item.component';
import { PopulationPipe } from '../planets/population.pipe';
import { CustomMaterialModule } from '../CustomMaterialModule';
import { PlanetComponent } from '../planets/planet/planet.component';
import { PlanetsResolver } from '../planets/list/planets-resolver.service';
import { CountResolver } from '../planets/list/count-resolver.service';
import { PlanetResolver } from '../planets/planet/planet-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CustomMaterialModule,
    FlexLayoutModule,
    PlanetsRoutingModule
  ],
  declarations: [ListComponent, ItemComponent, PopulationPipe, PlanetComponent],
  exports: [ListComponent, PlanetComponent],
  providers: [PlanetRepositoryService, PlanetsResolver, CountResolver, PlanetResolver]
})
export class PlanetsModule { }
