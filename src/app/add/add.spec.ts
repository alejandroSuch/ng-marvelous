import { async } from '@angular/core/testing';
import { add, addAfter10ms } from './add';

describe('add', () => {
  it('add(1, 1) should be 2', () => {
    expect(add(1, 1)).toBe(2);
  });

  it('add(2, 1) should be 3', () => {
    expect(add(2, 1)).toBe(3);
  });

  it('addAfter10ms(2, 1) should be 3', (done: DoneFn) => {
    addAfter10ms(2, 1).then(result => {
      expect(result).toBe(3);
      done();
    })
  });

  it('addAfter10ms(2, 1) should be 3', async(() => {
    addAfter10ms(2, 1).then(result => {
      expect(result).toBe(3);
    })
  }));
});