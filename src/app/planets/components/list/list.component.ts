import { PlanetRepositoryService } from './../../planet-repository.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Planet } from '../../planet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, OnDestroy {
  private planets: Planet[];
  private subscription: Subscription;
  constructor(private planetRepository: PlanetRepositoryService) { }

  ngOnInit() {
    this.subscription = this.planetRepository.getPage(1).subscribe(
      (planets: Planet[]) => {
        this.planets = planets
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
