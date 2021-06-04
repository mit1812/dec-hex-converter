import { hexCalculator } from '../utils/hexCalculator.js';

describe('decimal to hexadecimal calculator', () => {
  it('correctly converts multiple decimal values to hexadecimal', () => {
    expect(hexCalculator(10)).toEqual('A');
    expect(hexCalculator(15)).toEqual('F');
    expect(hexCalculator(30)).toEqual('1E');
    expect(hexCalculator(12232)).toEqual('2FC8');
  });
  it('returns null if input value is less than 0 or falsy', () => {
    expect(hexCalculator(-10)).toBeNull();
    expect(hexCalculator(false)).toBeNull();
    expect(hexCalculator('')).toBeNull();
    expect(hexCalculator(undefined)).toBeNull();
  });
  it('correctly converts numbers inputted as strings', () => {
    expect(hexCalculator('10')).toEqual('A');
    expect(hexCalculator('12232')).toEqual('2FC8');
    expect(hexCalculator('-12232')).toBeNull();
  });
});
