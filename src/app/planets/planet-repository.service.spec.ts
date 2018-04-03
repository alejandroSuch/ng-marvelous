import { PlanetRepositoryService } from './planet-repository.service';
import { Planet } from './planet';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

import * as page1 from './testData/planets.page1.json';

describe('PlanetRepositoryService', () => {
  let planetRepository: PlanetRepositoryService;
  let httpClientSpy: jasmine.SpyObj<any>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    planetRepository = new PlanetRepositoryService(httpClientSpy);
  });

  describe('findAll', () => {
    it('should return ten planets for a valid page', () => { 
      httpClientSpy.get.and.returnValue(of(page1));
  
      planetRepository.getPage(1).subscribe(
        (planets: Planet[]) => {
          expect(planets.length).toBe(10);
        }
      );
    });

    it('should return no planets for an invalid page', () => { 
      httpClientSpy.get.and.returnValue(_throw(new Error()));
  
      planetRepository.getPage(99).subscribe(
        (planets: Planet[]) => {
          expect(planets.length).toBe(0);
        }
      );
    });
  });

  describe('count', () => {
    it('should return 61 planets', () => {
      httpClientSpy.get.and.returnValue(of(page1));

      planetRepository.count().subscribe(
        total => expect(total).toBe(61)
      );
    });
  });
});