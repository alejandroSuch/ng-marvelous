import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'marvel-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less']
})
export class HeroFormComponent implements OnInit {
  @Output()
  onHeroAdded: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('heroName') heroName: ElementRef;
  @ViewChild('hasTights') hasTights: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  addHero(name, hasTights) {
    this.onHeroAdded.emit({name, hasTights});

    this.heroName.nativeElement.value = '';
    this.hasTights.nativeElement.checked = false;
  }

}
