import { HeroesService } from './heroes.service';
import { TestBed } from "@angular/core/testing";

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HeroesService] });
  });

  beforeEach(() => {
    service = TestBed.get(HeroesService);
  });

  it('Initial heroes are five', () => {
    const characters = service.getCharacters();

    expect(characters.length).toBe(5);
  });

  it('Initial heroes are five and I know their names', () => {
    const characters = service.getCharacters();

    expect(characters).toContain(jasmine.objectContaining({ name: 'Captain America' }));
    expect(characters).toContain(jasmine.objectContaining({ name: 'Hulk' }));
    expect(characters).toContain(jasmine.objectContaining({ name: 'Thor' }));
    expect(characters).toContain(jasmine.objectContaining({ name: 'Deadpool' }));
    expect(characters).toContain(jasmine.objectContaining({ name: 'Spider-Man' }));
  });

  it('When a new character is added, number of characters should be incremented by 1', () => {
    const oldCharacters = service.getCharacters();

    service.addCharacter({ name: 'Bocaseca-man', hasTights: true });

    const newCharacters = service.getCharacters();

    expect(oldCharacters).not.toBe(newCharacters);
    expect(newCharacters.length).toBe(oldCharacters.length + 1);
  });

});