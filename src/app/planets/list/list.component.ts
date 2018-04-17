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
  public currentPageIndex: number = 0;
  public planets:Planet[];
  public count: number;
  public loaded: boolean = false;

  constructor(
    private planetRepository: PlanetRepositoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
  }

  ngOnInit() { 
    this
      .route.data
      .subscribe((data: { planets: { list: Planet[], page: number }, count: number }) => {
        this.count = data.count;
        this.planets = data.planets.list;
        this.currentPageIndex = data.planets.page - 1;
        this.loaded = true;
      });
  }

  onPageChanged({ pageIndex }: PageEvent) { 
    const extras: NavigationExtras = {
      queryParams: { page: pageIndex + 1 }
    };

    this.router.navigate([], extras);
    this.loaded = false;
  }
}
