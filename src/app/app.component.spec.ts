import { HeroesService } from './heroes.service';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let heroesServiceSpy: jasmine.SpyObj<HeroesService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HeroesService', ['getCharacters', 'addCharacter']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { 
          provide: HeroesService, 
          useValue: spy
        }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    heroesServiceSpy = TestBed.get(HeroesService);
  });

  it('should change titles', () => {
    fixture.autoDetectChanges(); // ngOnInit
    expect(fixture.elementRef.nativeElement.querySelector('h1').innerText).toBe('Welcome to marvel!');

    component.title = 'my world';
    fixture.autoDetectChanges();
    expect(fixture.elementRef.nativeElement.querySelector('h1').innerText).toBe('Welcome to my world!');

  });

  it('should call heroesService.getCharacters on component initialization', () => {
    heroesServiceSpy.getCharacters.and.returnValue([]);
    fixture.autoDetectChanges(); // ngOnInit

    expect(heroesServiceSpy.getCharacters).toHaveBeenCalledTimes(1);
  });

  it('should call heroesService.getCharacters on component initialization', () => {
    heroesServiceSpy.getCharacters.and.returnValue([]);
    fixture.autoDetectChanges(); // ngOnInit

    component.addHero({name: 'bocaseca man'});

    expect(heroesServiceSpy.addCharacter).toHaveBeenCalledTimes(1);
  });

});