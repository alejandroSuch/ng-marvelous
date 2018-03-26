import { HeroesService } from './../heroes.service';
import { HeroFormComponent } from './hero-form.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";

describe('HeroFormComponent', () => {
  let fixture: ComponentFixture<HeroFormComponent>;
  let component: HeroFormComponent;
  let nativeElement: HTMLElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFormComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('component has been created', () => {
    expect(component).toBeDefined();
  });

  it('output emits on hero added', () => {
    const name = 'Bocaseca-man';
    const hasTights = true;
    spyOn(component.onHeroAdded, 'emit');

    component.addHero(name, hasTights);

    expect(component.onHeroAdded.emit).toHaveBeenCalledWith({ name, hasTights });
  });

  it('if input changed, output should emit event', () => {
    const name = 'Bocaseca-man';
    const hasTights = true;

    spyOn(component.onHeroAdded, 'emit');

    const input: HTMLInputElement = <HTMLInputElement>nativeElement.querySelector('input[type="text"]');
    const button: HTMLButtonElement = <HTMLButtonElement>nativeElement.querySelector('button');
    const checkBox: HTMLInputElement = <HTMLInputElement>nativeElement.querySelector('input[type="checkbox"]');

    input.value = name;
    checkBox.checked = true;

    button.click();

    expect(component.onHeroAdded.emit).toHaveBeenCalledWith({ name, hasTights });
    expect(input.value).toBe('');
    expect(checkBox.checked).toBeFalsy();
  });
});