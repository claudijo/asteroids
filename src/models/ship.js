import Polygon from './polygon';

export default class Ship extends Polygon {
  constructor() {
    super([[0.5, 0], [-0.25, 0.25], [-0.25, -0.25]]);
  }

  muzzle() {
    return this.transformed()[0];
  }

  // laserSegment() {
  //   const dist = 20 * Math.sqrt(2);
  //   const [x, y] = this.transformed()[0]; // Coordinates for the tip of the ship
  //   return [
  //     [x, y],
  //     [x + dist * Math.cos(this.rotationAngle), y + dist * Math.sin(this.rotationAngle)],
  //   ];
  // }
}