import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'marvel-heroes-list-item',
  templateUrl: './heroes-list-item.component.html',
  styleUrls: ['./heroes-list-item.component.less'],
  encapsulation: ViewEncapsulation.Native
})
export class HeroesListItemComponent implements OnInit {
  @Input()
  hero: any;

  constructor() {
  }

  ngOnInit() {
  }

}
