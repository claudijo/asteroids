import AbstractExpression from './abstract-expression';

export default class Fn extends AbstractExpression {
  constructor(name) {
    super();

    this.name = name;
  }
}