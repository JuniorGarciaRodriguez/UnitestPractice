import Calculator from './calculator';

describe('testing the calculator class correct behavior', () => {
  let solver;

  beforeEach(() => {
    solver = new Calculator();
  });

  test('add two numbers', () => {
    expect(solver.add(1, 2)).toBe(3);
  });

  test('add two negative numbers', () => {
    expect(solver.add(-54, -86)).toBe(-140);
  });

  test('add zero', () => {
    expect(solver.add(0, 2)).toBe(2);
  });

  test('subtract two numbers', () => {
    expect(solver.subtract(1, 2)).toBe(-1);
  });

  test('subtract two negative numbers', () => {
    expect(solver.subtract(-54, -86)).toBe(32);
  });

  test('subtract zero', () => {
    expect(solver.subtract(2, 0)).toBe(2);
  });

  test('multiply two numbers', () => {
    expect(solver.multiply(1, 2)).toBe(2);
  });

  test('multiply two negative numbers', () => {
    expect(solver.multiply(-54, -86)).toBe(4644);
  });

  test('invert sign', () => {
    expect(solver.multiply(-54, -1)).toBe(54);
  });

  test('divide two numbers', () => {
    expect(solver.divide(4, 2)).toBe(2);
  });

  test('zero division error', () => {
    expect(() => solver.divide(4, 0).toThrow('Zero division is not defined'));
  });
});