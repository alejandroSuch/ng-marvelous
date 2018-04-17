import { CountResolver } from './planets/list/count-resolver.service';
import { PlanetsResolver } from './planets/list/planets-resolver.service';
import { PlanetComponent } from './planets/planet/planet.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListComponent } from './planets/list/list.component'

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'planets',
    component: ListComponent,
    resolve: {
      planets: PlanetsResolver,
      count: CountResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
