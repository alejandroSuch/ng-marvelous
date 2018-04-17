import { PlanetRepositoryService } from '../planet-repository.service';
import { Planet } from './../planet';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, NavigationExtras, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay'

@Component({
  selector: 'sw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public planets$: Observable<Planet[]>;
  public planets:Planet[] = null;
  public count$: Observable<number>;
  public currentPage: number = 0;
  public loaded: boolean;

  constructor(
    private planetRepository: PlanetRepositoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
  }

  ngOnInit() {
    this.count$ = this.planetRepository.count();

    const getPageNumber = paramMap => {
      if(paramMap.has('page')) {
        return +paramMap.get('page');
      } else {
        return 1;
      }
    };

    this.route.queryParamMap
      .do(() => this.loaded = false)
      .map(getPageNumber)
      .do(page => this.currentPage = page - 1)
      .switchMap(page => this.planetRepository.getPage(page))
      .map(planets => this.planets = planets)
      .do(() => this.loaded = true)
      .subscribe();
  }

  onPageChanged({ pageIndex }: PageEvent) { 
    const extras: NavigationExtras = {
      queryParams: { page: pageIndex + 1 }
    };

    this.router.navigate([], extras);
  }
}
