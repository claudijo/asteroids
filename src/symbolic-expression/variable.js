import AbstractExpression from './abstract-expression';

export default class Variable extends AbstractExpression {
  constructor(symbol) {
    super();

    this.symbol = symbol;
  }

  evaluate(bindings) {
    if (!this.symbol in bindings) {
      throw new Error(`Variable ${this.symbol} is not bound`)
    }
    return bindings[this.symbol];
  }

  expand() {
    return this;
  }

  toString() {
    return this.symbol.toString();
  }
}