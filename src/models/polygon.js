import { add, doSegmentsIntersect, rotate } from '../libs/vector';
import { range } from '../libs/array';

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
