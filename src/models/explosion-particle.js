import { random, randomInt } from '../libs/number';
import { range } from '../libs/array';
import { toCartesian } from '../libs/vector';
import Polygon from './polygon';

export default class ExplosionParticle extends Polygon {
  constructor() {
    const sides = randomInt(3, 6);
    const vectors = range(sides).map(i => {
      const length = random(0.05, 0.1);
      return toCartesian([length, 2 * Math.PI * i / sides]);
    });

    super(vectors);

    this.reach = 6;
  }
}