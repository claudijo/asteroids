import AbstractExpression from './abstract-expression';

export default class Power extends AbstractExpression {
  constructor(base, exponent) {
    super();

    this.base = base;
    this.exponent = exponent;
  }

  evaluate(bindings) {
    return this.base.evaluate(bindings) ** this.exponent.evaluate(bindings)
  }

  toString() {
    return `${this.base.toString()}**${this.exponent.toString()}`
  }
}