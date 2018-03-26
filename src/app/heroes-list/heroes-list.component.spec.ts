import { HeroesListComponent } from './heroes-list.component';
import { TestBed, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroesListComponent', () => {
  let fixture: ComponentFixture<HeroesListComponent>;
  let component: HeroesListComponent;
  let nodes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        // { provide: ComponentFixtureAutoDetect, useValue: true } <-- Use this to avoid fixture.autoDetectChanges()
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
  });

  it('Must not contain list items when no input', () => {
    nodes = fixture.nativeElement.querySelectorAll('marvel-heroes-list-item');
    expect(nodes.length).toBe(0);
  });

  it('Must not contain list items when input is an empty array', () => {
    component.heroesList = [];
    fixture.autoDetectChanges();
    nodes = fixture.nativeElement.querySelectorAll('marvel-heroes-list-item');
    expect(nodes.length).toBe(0);
  });

  it('Must contain 3 list items when giving a list', () => {
    // GIVEN
    component.heroesList = [{}, {}, {}];

    // WHEN
    fixture.autoDetectChanges();

    // THEN
    nodes = fixture.nativeElement.querySelectorAll('marvel-heroes-list-item');
    expect(nodes.length).toBe(3);
  });
});