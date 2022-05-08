import Variable from './variable';
import Num from './num';
import Sum from './sum';
import Product from './product';
import Power from './power';
import Apply from './apply';

export const distinctVariables = exp => {
  if (exp instanceof Variable) {
    return new Set(exp.symbol);
  }

  if (exp instanceof Num) {
    return new Set();
  }

  if (exp instanceof Sum) {
    const values = exp.exps
      .map(exp => distinctVariables(exp))
      .filter(set => set.size > 0)
      .map(set => [...set.values()])
      .flat();

    return new Set(values);
  }

  if (exp instanceof Product) {
    return new Set([
      ...distinctVariables(exp.exp1),
      ...distinctVariables(exp.exp2),
    ]);
  }

  if (exp instanceof Power) {
    return new Set([
      ...distinctVariables(exp.base),
      ...distinctVariables(exp.exponent),
    ])
  }

  if (exp instanceof Apply) {
    return distinctVariables(exp.arg)
  }

  throw new Error('Invalid expression')
};