import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlanetComponent } from './planet/planet.component';
import { PlanetResolver } from './planet/planet-resolver.service';
import { ListComponent } from './list/list.component';
import { PlanetsResolver } from './list/planets-resolver.service';
import { CountResolver } from './list/count-resolver.service';

const routes: Routes = [
  {
    path: 'planets',
    children: [
      {
        path: ':id',
        component: PlanetComponent,
        resolve: {
          planet: PlanetResolver
        },
        runGuardsAndResolvers: 'paramsChange'
      },
      {
        path: '',
        component: ListComponent,
        resolve: {
          planets: PlanetsResolver,
          count: CountResolver
        },
        runGuardsAndResolvers: 'always'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PlanetsRoutingModule {

}