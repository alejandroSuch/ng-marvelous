import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from './planet';

import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlanetRepositoryService {
  private baseUrl = '/api/planets/';
  private planetsUrl = `${this.baseUrl}?page=`

  constructor(private http: HttpClient) { }

  getPage(page:number = 1):Observable<Planet[]> {
    const url = `${this.planetsUrl}${page}`;
    const regex = /^https:\/\/swapi.co\/api\/planets\/(\d+)\/$/;

    return this.http
      .get(url)
      .mergeMap(data => <Observable<Planet>>from(data['results']))
      .reduce((planets: Planet[], aPlanet: Planet) => {
        const id = parseInt(regex.exec(aPlanet.url)[1]);
        return [...planets, {...aPlanet, id}];
      }, [])
      .catch(() => of([]));
  }

  count(): Observable<number> {
    const page = 1;
    const url = `${this.planetsUrl}${page}`;

    return this.http.get(url).map(data => data['count']);
  }
}
