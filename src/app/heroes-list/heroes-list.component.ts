import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'marvel-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent implements OnInit {
  @Input()
  heroesList: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
