import { distinctVariables } from './lib';
import Variable from './variable';
import Num from './num';
import Sum from './sum';
import Product from './product';
import Power from './power';
import Apply from './apply';
import Fn from './fn';
import Differance from './differance';
import Quotient from './quotient';

test('distinct variables', () => {
  expect(distinctVariables(new Variable('z')))
    .toEqual(new Set('z'));

  expect(distinctVariables(new Num(3)))
    .toEqual(new Set());

  expect(distinctVariables(new Sum(
    new Variable('x'),
    new Variable('x'),
    new Variable('y'),
    new Num(3),
  )))
    .toEqual(new Set(['x', 'y']));

  expect(distinctVariables(new Product(
    new Variable('x'),
    new Variable('y'),
  )))
    .toEqual(new Set(['x', 'y']));

  expect(distinctVariables(new Power(
    new Variable('x'),
    new Variable('y'),
  )))
    .toEqual(new Set(['x', 'y']));

  expect(distinctVariables(new Apply(
    new Fn('sin'),
    new Variable('x'),
  )))
    .toEqual(new Set(['x']));

  expect(distinctVariables(new Product(
    new Sum(
      new Product(
        new Num(3),
        new Power(
          new Variable('x'),
          new Num(2),
        ),
      ),
      new Variable('x'),
    ),
    new Apply(
      new Fn('sin'),
      new Variable('x'),
    ),
  )))
    .toEqual(new Set(['x']));
});

test('Evaluate number', () => {
  const expression = new Num(7);
  expect(expression.evaluate({ x: 3, y: 6, q: -15 }))
    .toBe(7);
});

test('Evaluate variable', () => {
  const expression = new Variable('x');
  expect(expression.evaluate({ x: 3, y: 6, q: -15 }))
    .toBe(3);
});

test('Evaluate product', () => {
  const expression = new Product(
    new Variable('x'),
    new Num(2),
  );
  expect(expression.evaluate({ x: 3, y: 6, q: -15 }))
    .toBe(6);
});

test('Evaluate sum', () => {
  const expression = new Sum(
    new Variable('x'),
    new Variable('y'),
    new Num(2),
  );
  expect(expression.evaluate({ x: 3, y: 6, q: -15 }))
    .toBe(11);
});

test('Evaluate power', () => {
  const expression = new Power(
    new Variable('x'),
    new Num(2),
  );
  expect(expression.evaluate({ x: 3, y: 6, q: -15 }))
    .toBe(9);
});

test('Evaluate differance', () => {
  const expression = new Differance(
    new Variable('x'),
    new Num(2),
  );
  expect(expression.evaluate({ x: 3, y: 6, q: -15 }))
    .toBe(1);
});

test('Evaluate quotient', () => {
  const expression = new Quotient(
    new Variable('x'),
    new Num(2),
  );
  expect(expression.evaluate({ x: 3, y: 6, q: -15 }))
    .toBe(1.5);
});

test('Evaluate function', () => {
  const expression = new Apply(
    new Fn('cos'),
    new Variable('pi'),
  );
  expect(expression.evaluate({ pi: Math.PI }))
    .toBe(-1);
});

test('Evaluate deeply nested expression', () => {
  const expression = new Product(
    new Sum(
      new Product(
        new Num(3),
        new Power(
          new Variable('x'),
          new Num(2),
        ),
      ),
      new Variable('x'),
    ),
    new Apply(
      new Fn('sin'),
      new Variable('x'),
    ),
  );

  expect(expression.evaluate({ x: 5 }))
    .toBe(-76.71394197305108);
});

test('to string', () => {
  const Y = new Variable('y');
  const Z = new Variable('z');
  const A = new Variable('a');
  const B = new Variable('b');
  const expression = new Product(new Sum(A,B), new Sum(Y,Z));

  expect(expression.toString()).toBe('(a + b) * (y + z)');
});

// test('expand', () => {
//   const a = new Variable('a');
//   const b = new Variable('b');
//   const x = new Variable('x');
//   const y = new Variable('y');
//   const expression = new Product(new Sum(a,b), new Sum(x,y));
//
//   expect(expression.expand().toString()).toBe('ax + ay + bx + by');
// });