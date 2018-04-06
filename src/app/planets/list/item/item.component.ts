import { Planet } from './../../planet';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-planets-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {
  @Input()
  planet: Planet;

  constructor() { }

  ngOnInit() {
  }

}
