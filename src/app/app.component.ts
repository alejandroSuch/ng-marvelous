import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';

@Component({
  selector: 'marvel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'marvel';
  characters = [];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.characters = this.heroesService.getCharacters();
    console.log('characters lodaded');
  }

  addHero(hero) {
    this.heroesService.addCharacter(hero);
  }
}
