import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private characters = [
    {name: 'Spider-Man', hasTights: true},
    {name: 'Hulk', hasTights: false},
    {name: 'Thor', hasTights: false},
    {name: 'Captain America', hasTights: true},
    {name: 'Deadpool', hasTights: false}
  ];

  constructor() { }

  getCharacters() {
    return this.characters;
  }

}
