import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { PlanetRepositoryService } from './planet-repository.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListComponent],
  providers: [PlanetRepositoryService]
})
export class PlanetsModule { }
