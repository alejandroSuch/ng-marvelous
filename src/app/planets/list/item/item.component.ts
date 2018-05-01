import { Planet } from './../../planet';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sw-planets-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {
  @Input()
  planet: Planet;

  @Output()
  onPlanetClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  planetClicked() {
    this.onPlanetClicked.emit(this.planet.id);
  }

}
