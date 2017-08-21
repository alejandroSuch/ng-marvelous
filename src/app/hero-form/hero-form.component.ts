import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'marvel-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less']
})
export class HeroFormComponent implements OnInit {
  @Output()
  onHeroAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  addHero(name, hasTights = false) {
    this.onHeroAdded.emit({name, hasTights});
  }

}
