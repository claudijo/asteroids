import Ship from '../models/ship';
import { range } from '../libs/array';
import Asteroid from '../models/asteroid';
import { randomInt } from '../libs/number';

export default class Space {
  constructor() {
    this.ship = new Ship();
    this.asteroidCount = 10;
    this.asteroids = range(this.asteroidCount).map(i => {
      const asteroid = new Asteroid();
      asteroid.x = randomInt(-9, 9);
      asteroid.y = randomInt(-9, 9);
      return asteroid;
    });
  }
}

