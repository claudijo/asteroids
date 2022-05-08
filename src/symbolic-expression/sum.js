import AbstractExpression from './abstract-expression';
import { sum } from '../libs/array';

export default class Sum extends AbstractExpression {
  constructor(...exps) {
    super();

    this.exps = exps;
  }

  evaluate(bindings) {
    return sum(...this.exps.map(exp => exp.evaluate(bindings)));
  }

  expand() {
    return new Sum(...this.exps.map(exp => exp.expand()));
  }

  toString() {
    return this.exps.map(exp => exp.toString()).join(' + ');
  }
}