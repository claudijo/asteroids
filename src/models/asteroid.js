import Polygon from './polygon';
import { randomInt, random } from '../libs/number';
import { toCartesian } from '../libs/vector';
import { range } from '../libs/array';

export default class Asteroid extends Polygon {
  constructor(generation = 1) {
    const sides = randomInt(5, 9);
    const vectors = range(sides).map(i => {
      const length = random(0.5, 1) / generation;
      return toCartesian([length, 2 * Math.PI * i / sides]);
    });

    super(vectors);

    this.vx = random(-1, 1) * generation;
    this.vy = random(-1, 1) * generation;
    this.vr = random(-1, 1) * generation;

    this.generation = generation;
  }
}