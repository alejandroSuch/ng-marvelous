import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlanetRepositoryService } from './planet-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from '../planets/list/item/item.component';
import { PopulationPipe } from '../planets/population.pipe';
import { CustomMaterialModule } from '../CustomMaterialModule';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  declarations: [ListComponent, ItemComponent, PopulationPipe],
  providers: [PlanetRepositoryService]
})
export class PlanetsModule { }
