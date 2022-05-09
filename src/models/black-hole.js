import Polygon from './polygon';
import { toCartesian } from '../libs/vector';
import { range } from '../libs/array';

export default class BlackHole extends Polygon {
  constructor(force) {
    const sides = 20;
    const vectors = range(sides).map(i => {
      const length = 0.5;
      return toCartesian([length, 2 * Math.PI * i / sides]);
    });

    super(vectors);

    this.force = force;
  }
}