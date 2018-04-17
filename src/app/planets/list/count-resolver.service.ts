import { Observable } from 'rxjs';
import { PlanetRepositoryService } from './../planet-repository.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CountResolver implements Resolve<number> {

  constructor(private planetRepository: PlanetRepositoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number | Observable<number> | Promise<number> {
    return this.planetRepository.count()
  }
}
