import { PlanetRepositoryService } from '../planet-repository.service';
import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public planets$: Observable<Planet[]>;

  constructor(private planetRepository: PlanetRepositoryService) { }

  ngOnInit() {
    this.planets$ = this.planetRepository.getPage(1);
  }
}
