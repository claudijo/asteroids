import {
  add, angleBetween, component, cross,
  distance, dot, faceTo2d, inferMatrix,
  length, linearCombination, matrixMultiply,
  multiply, multiplyMatrixVector, normal,
  perimeter,
  rotate, rotateZ,
  scale,
  subtract,
  toCartesian,
  toPolar,
  translate, translate3d, unit, vectorTo2d,
} from './vector';
import dino from '../wireframes/dino.json';

test('add', () => {
  expect(add([1, 2], [3, 4])).toStrictEqual([4, 6]);
  expect(add([1, 2, -3], [3, 4, 5])).toStrictEqual([4, 6, 2]);
});

test('subtract', () => {
  expect(subtract([1, 2], [3, 4])).toStrictEqual([-2, -2]);
  expect(subtract([1, 2, -3], [3, 4, 5])).toStrictEqual([-2, -2, -8]);
});

test('length', () => {
  expect(length([-4, 3])).toBe(5);
  expect(length([2, -4, 4])).toBe(6);
});

test('scalar multiplication', () => {
  expect(multiply(3, [1, -2])).toStrictEqual([3, -6]);
  expect(multiply(3, [1, 2, 3])).toStrictEqual([3, 6, 9]);
});

test('translate', () => {
  expect(translate([1, 1], [0, 0], [0, 1], [-3, -3]))
    .toStrictEqual([[1, 1], [1, 2], [-2, -2]]);
});

test('scale', () => {
  expect(scale(2, [0, 0], [0, 1], [-3, -3]))
    .toStrictEqual([[0, 0], [0, 2], [-6, -6]]);
});

test('distance', () => {
  expect(distance([2, 2], [4, 2])).toBe(2);
});

test('perimeter', () => {
  expect(perimeter([1, 0], [1, 1], [0, 1], [0, 0])).toBe(4);
  expect(perimeter(...dino)).toBe(44.77115093694563);
});

test('to cartesian coordinates', () => {
  expect(toCartesian([5, 37 * Math.PI / 180]))
    .toStrictEqual([3.993177550236464, 3.0090751157602416]);
});

test('to polar coordinates', () => {
  expect(toPolar([1, 0])).toStrictEqual([1, 0]);
  expect(toPolar([-2, 3]))
    .toStrictEqual([3.605551275463989, 2.1587989303424644]);
});

test('rotate', () => {
  expect(rotate(Math.PI / 2, [4, 4])).toStrictEqual([-4, 4.000000000000001]);
});

test('dot product', () => {
  expect(dot([2, 3], [4, 5])).toBe(23);
  expect(dot([1, 2, -1], [3, 0, 3])).toBe(0);
});

test('angle between vectors', () => {
  expect(angleBetween([1, 2, 2], [2, 2, 1])).toBe(0.47588224966041665);
});

test('cross production', () => {
  expect(cross([1, 0, 0], [0, 1, 0])).toStrictEqual([0, 0, 1]);
  expect(cross([0, 2, 0], [0, 0, -2])).toStrictEqual([-4, 0, 0]);
});

test('extract component', () => {
  expect(component([1, 0, 0], [1, 0, 0])).toBe(1);
});

test('flatten 3d vector to plane', () => {
  expect(vectorTo2d([1, 2, 3], [1, 0, 0], [0, 1, 0])).toStrictEqual([1, 2]);
});

test('project 3d face on 2d surface', () => {
  expect(faceTo2d([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toStrictEqual([[1, 0], [0, 1], [0, 0]]);
});

test('unit vector', () => {
  expect(unit([1, 1, 1])).toStrictEqual([0.5773502691896258, 0.5773502691896258, 0.5773502691896258]);
});

test('normal from face', () => {
  expect(normal([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toStrictEqual([1, 1, 1]);
});

test('linear combination', () => {
  expect(linearCombination([1, 2, 3], [1, 0, 0], [0, 1, 0], [0, 0, 1]))
    .toStrictEqual([1, 2, 3]);
  expect(linearCombination([3, -2, 5], [0, 0, 1], [2, 1, 0], [1, 0, -1]))
    .toStrictEqual([1, -2, -2]);
});

test('vector by matrix multiplication', () => {
  const B = [
    [0, 2, 1],
    [0, 1, 0],
    [1, 0, -1],
  ];
  const v = [3, -2, 5];
  expect(multiplyMatrixVector(B, v)).toStrictEqual([1, -2, -2]);
});

test('matrix by matrix multiplication', () => {
  expect(matrixMultiply([[1, 1, 0], [1, 0, 1], [1, -1, 1]], [[0, 2, 1], [0, 1, 0], [1, 0, -1]]))
    .toStrictEqual([[0, 3, 1], [1, 2, 0], [1, 1, 0]]);

  expect(matrixMultiply([[1, 2], [3, 4]], [[0, -1], [1, 0]]))
    .toStrictEqual([[2, -1], [4, -3]]);

  // expect(matrixMultiply([[-1, -1, 0], [-2, 1, 2], [1, 1, 1]], [1,1,1])).toStrictEqual([-2,1,0]);

  // expect(matrixMultiply(
  //   [[-1, 0, -1, -2, -2], [0, 0, 2, -2, 1], [-2, -1, -2, 0, 1], [0, 2, -2, -1, 0], [1, 1, -1, -1, 0]],
  //   [[-1, 0, -1, -2, -2], [0, 0, 2, -2, 1], [-2, -1, -2, 0, 1], [0, 2, -2, -1, 0], [1, 1, -1, -1, 0]]
  // )).toStrictEqual([[-10, -1, 2, -7, 4], [-2, 5, 5, 4, -6], [-1, 1, -4, 2, -2], [-4, -5, -5, -9, 4], [-1, -2, -2, -6, 4]]);
});

test('translate 3d', () => {
  expect(translate3d([2, 2, 2], [1, 0, 0])).toStrictEqual([3, 2, 2]);
});

test('infer matrix', () => {
  const transformation = angle => vector => rotateZ(angle, vector);
  expect(inferMatrix(3, transformation(Math.PI / 2)))
    .toStrictEqual([
      [6.123233995736766e-17, -1, 0],
      [1, 1.2246467991473532e-16, 0],
      [0, 0, 1],
    ]);
});