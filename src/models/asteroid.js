import Polygon from './polygon';
import { randomInt, random } from '../libs/number';
import { toCartesian } from '../libs/vector';
import { range } from '../libs/array';

export default class Asteroid extends Polygon {
  constructor(sides = randomInt(5, 9), radius = () => random(0.5, 1)) {

    const vectors = range(sides).map(i => {
      const length = typeof radius === 'function' ? radius(sides) : radius;
      return toCartesian([length, 2 * Math.PI * i / sides]);
    })

    super(vectors);
  }
}