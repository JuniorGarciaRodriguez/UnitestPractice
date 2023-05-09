export default class Calculator {
  add(a, b) {
    this.a = a;
    return this.a + b;
  }

  subtract(a, b) {
    this.a = a;
    return this.a - b;
  }

  multiply(a, b) {
    this.a = a;
    return this.a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Zero division is not defined');
    }

    this.a = a;
    return this.a / b;
  }
}