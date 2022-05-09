import Polygon from './polygon';

export default class Particle extends Polygon {
  constructor() {
    super([[0, 0], [0.1, 0]]);

    this.reach = 6;
  }
}