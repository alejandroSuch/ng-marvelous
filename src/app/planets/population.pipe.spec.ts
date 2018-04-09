import { PopulationPipe } from './population.pipe';

describe('PopulationPipe', () => {
  const pipe = new PopulationPipe();

  it('create an instance', () => {  
    expect(pipe).toBeTruthy();
  });

  it('???', () => {
    expect(pipe.transform(undefined)).toBe('???');
  })

  it('default value', () => {
    expect(pipe.transform(undefined, 'desconocido')).toBe('desconocido');
  })

  it('as is', () => {
    expect(pipe.transform('999')).toBe('999');
  });

  it('thousands', () => {
    expect(pipe.transform('1000')).toBe('1k');
    expect(pipe.transform('1500')).toBe('1.5k');
  });

  it('millions', () => {
    expect(pipe.transform('1000000')).toBe('1M');
    expect(pipe.transform('1500000')).toBe('1.5M');
  });

  it('billions', () => {
    expect(pipe.transform('1000000000')).toBe('1G');
    expect(pipe.transform('1500000000')).toBe('1.5G');
  });

  it('trillions', () => {
    expect(pipe.transform('1000000000000')).toBe('1T');
    expect(pipe.transform('1500000000000')).toBe('1.5T');
  });

  it('quadrillions', () => {
    expect(pipe.transform('1000000000000000')).toBe('1P');
    expect(pipe.transform('1500000000000000')).toBe('1.5P');
  });

  it('quintillions', () => {
    expect(pipe.transform('1000000000000000000')).toBe('1E');
    expect(pipe.transform('1500000000000000000')).toBe('1.5E');
  });
});