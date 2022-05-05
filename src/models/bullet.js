import Polygon from './polygon';

export default class Bullet extends Polygon {
  constructor() {
    super([[0, 0], [0.5, 0]]);

    this.reach = 50;
  }
}