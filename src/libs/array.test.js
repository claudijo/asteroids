import { multiply, sum, zip } from './array';

test('sum', () => {
  const nums = [1, 2, 3];
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('multiply', () => {
  expect(multiply(1, 2, 3, 4)).toBe(24);
})

test('zip', () => {
  expect(zip(['a', 'b'], ['c', 'd'])).toStrictEqual([['a', 'c'], ['b', 'd']])
})