import { Observable } from 'rxjs';
import { PlanetRepositoryService } from './../planet-repository.service';
import { Planet } from './../planet';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class PlanetResolver implements Resolve<Planet> {

  constructor(private planetRepository: PlanetRepositoryService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Planet | Observable<Planet> | Promise<Planet> {
    const id = +route.paramMap.get('id');

    if(isNaN(id)) {
      this.router.navigate(['/404']);
      return;
    }

    return this.planetRepository
      .getPlanet(id)
      .catch(err => {
        this.router.navigate(['/404']);
        return _throw(err);
      });
  }

}
