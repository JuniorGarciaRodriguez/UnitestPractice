import { stringLength, reverseString } from './main';

describe('string function', () => {
  test('returns the length of the string when it is between 1 and 10 characters long', () => {
    expect(stringLength('hola')).toBe(4);
    expect(stringLength('with space')).toBe(10);
  });

  test('throws an error when string is less than 1 character long', () => {
    expect(() => stringLength('')).toThrow('The string must be from 1 to 10 characters long!');
  });

  test('throws an error when string is more than 10 characters long', () => {
    expect(() => stringLength('this string is too long')).toThrow('The string must be from 1 to 10 characters long!');
  });

  test('reverse a string correctly', () => {
    expect(reverseString('hola')).toBe('aloh');
    expect(reverseString('')).toBe('');
    expect(reverseString('with space')).toBe('ecaps htiw');
  });
});