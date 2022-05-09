import { add, doSegmentsIntersect, length, rotate } from '../libs/vector';
import { range } from '../libs/array';

export default class Polygon {
  constructor(points) {
    this.points = points;
    this.rotationAngle = 0;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.vr = 0;
    this.acceleration = 0;
    this.travelled = 0;
  }

  move(ms) {
    const dx = this.vx * ms / 1000;
    const dy = this.vy * ms / 1000;
    [this.x, this.y] = add([this.x, this.y], [dx, dy]);

    this.travelled += this.speed() / ms;

    if (this.x < -11) {
      this.x += 22
    }
    if (this.y < -11) {
      this.y += 22
    }
    if (this.x > 11) {
      this.x -= 22
    }
    if (this.y > 11) {
      this.y -=22
    }
  }

  rotate(ms) {
    const dr = this.vr * ms / 1000;
    [this.rotationAngle] = add([this.rotationAngle], [dr]);
  }

  accelerate(ms) {
    const ax = this.acceleration * Math.cos(this.rotationAngle);
    const ay = this.acceleration * Math.sin(this.rotationAngle);
    this.vx += ax * ms / 1000
    this.vy += ay * ms / 1000
  }

  speed() {
    return length([this.vx, this.vy]);
  }

  transformed(points = this.points) {
    return points
      .map(point => rotate(this.rotationAngle, point))
      .map(point => add([this.x, this.y], point));
  }

  segments() {
    const pointCount = this.points.length;
    const points = this.transformed();
    return range(pointCount).map(i => {
      return [
        points[i],
        points[(i + 1) % pointCount]
      ]
    })
  }

  doesCollide(otherPolygon) {
    for (const otherSegment of otherPolygon.segments()) {
      if (this.doesIntersect(otherSegment)) {
        return true;
      }
    }
    return false;
  }

  doesIntersect(otherSegment) {
    for (const segment of this.segments()) {
      if (doSegmentsIntersect(otherSegment, segment)) {
        return true;
      }
    }
    return false;
  }
}
