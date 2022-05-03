import Polygon from './polygon';

export default class Ship extends Polygon {
  constructor() {
    super([[0.5,0], [-0.25,0.25], [-0.25,-0.25]]);
  }
}