import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'marvel-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.less']
})
export class HeroesListComponent implements OnInit {
  @Input()
  heroesList: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
