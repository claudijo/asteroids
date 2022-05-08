export default class AbstractExpression {
  evaluate(bindings) {
    throw new Error('Method `evaluate` not implemented')
  }

  expand() {
    throw new Error('Method `expand` not implemented')
  }

  toString() {
    throw new Error('Method `toString` not implemented')
  }
}