import { multiply, sum } from './array';

test('sum', () => {
  const nums = [1, 2, 3];
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('multiply', () => {
  expect(multiply(1, 2, 3, 4)).toBe(24);
})