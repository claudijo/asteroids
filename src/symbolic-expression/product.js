import AbstractExpression from './abstract-expression';
import Sum from './sum';
import Differance from './differance';

export default class Product extends AbstractExpression {
  constructor(exp1, exp2) {
    super();

    this.exp1 = exp1;
    this.exp2 = exp2;
  }

  evaluate(bindings) {
    return this.exp1.evaluate(bindings) * this.exp2.evaluate(bindings);
  }

  expand() {
    const expanded1 = this.exp1.expand()
    const expanded2 = this.exp2.expand()

    if (expanded1 instanceof Sum) {
      return new Sum(...expanded1.exps
        .map(exp => (new Product(exp, expanded2)).expand())
      );
    }

    if (expanded2 instanceof Sum) {
      return new Sum(...expanded2.exps
        .map(exp => (new Product(expanded2, exp)).expand())
      );
    }

    return new Product(expanded1, expanded2);
  }

  toString() {
    const exp1String = this.exp1.toString();
    const exp2String = this.exp2.toString();

    const exp1 = this.exp1 instanceof Sum || this.exp1 instanceof Differance
      ? `(${exp1String})`
      : exp1String;
    const exp2 = this.exp2 instanceof Sum || this.exp2 instanceof Differance
      ? `(${exp2String})`
      : exp2String;

    return `${exp1} * ${exp2}`;
  }
}