import AbstractExpression from './abstract-expression';

const FunctionBindings = {
  "sin": Math.sin.bind(Math),
  "cos": Math.cos.bind(Math),
  "ln": Math.log.bind(Math),
}

export default class Apply extends AbstractExpression {
  constructor(fn, arg) {
    super();

    this.fn = fn;
    this.arg = arg;
  }

  evaluate(bindings) {
    if (!this.fn.name in FunctionBindings) {
      throw new Error(`Unknown function ${this.fn.name}`);
    }

    return FunctionBindings[this.fn.name](this.arg.evaluate(bindings))
  }

  expand() {
    return new Apply(this.fn, this.arg.expand());
  }

  toString() {
    return `${this.fn.name}(${this.arg.toString()})`
  }
}