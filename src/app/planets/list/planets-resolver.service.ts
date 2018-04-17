import { PlanetRepositoryService } from '../planet-repository.service';
import { Observable } from 'rxjs';
import { Planet } from '../planet';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap } from '@angular/router';

@Injectable()
export class PlanetsResolver implements Resolve<{ list: Planet[], page: number }> {

  constructor(
    private planetRepository: PlanetRepositoryService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { list: Planet[], page: number } | Observable<{ list: Planet[], page: number }> | Promise<{ list: Planet[], page: number }> {
    const page: number = this.getPageNumber(route.queryParamMap);

    return this.planetRepository
      .getPage(page)
      .map(list => ({ list, page }));
  }

  getPageNumber(paramMap: ParamMap):number {
    if(paramMap.has('page')) {
      return +paramMap.get('page');
    } else {
      return 1;
    }
  };
}
