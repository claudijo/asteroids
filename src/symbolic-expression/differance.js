import AbstractExpression from './abstract-expression';

export default class Differance extends AbstractExpression {
  constructor(exp1, exp2) {
    super();

    this.exp1 = exp1;
    this.exp2 = exp2;
  }

  evaluate(bindings) {
    return this.exp1.evaluate(bindings) - this.exp2.evaluate(bindings);
  }
}