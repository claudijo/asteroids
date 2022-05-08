import AbstractExpression from './abstract-expression';

export default class Quotient extends AbstractExpression {
  constructor(numerator, denominator) {
    super();

    this.numerator = numerator;
    this.denominator = denominator;
  }

  evaluate(bindings) {
    return this.numerator.evaluate(bindings) / this.denominator.evaluate(bindings);
  }
}