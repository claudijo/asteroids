import AbstractExpression from './abstract-expression';

export default class Num extends AbstractExpression {
  constructor(num) {
    super();
    
    this.num = num;
  }

  evaluate(bindings) {
    return this.num;
  }

  expand() {
    return this;
  }

  toString() {
    return this.num.toString();
  }
}