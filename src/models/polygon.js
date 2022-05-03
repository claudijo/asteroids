import { add, rotate } from '../libs/vector';

export default class Polygon {
  constructor(points) {
    this.points = points;
    this.rotationAngle = 0;
    this.x = 0;
    this.y = 0;
  }

  transformed() {
    return this.points
      .map(point => rotate(this.rotationAngle, point))
      .map(point => add([this.x, this.y], point));
  }
}
