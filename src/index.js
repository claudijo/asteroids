import Ship from './models/ship';
import { range } from './libs/array';
import Asteroid from './models/asteroid';
import { randomInt } from './libs/number';
import stage from './templates/stage';
import { fillAndStroke, toPixels, trace } from './utils/canvas';

const ship = new Ship();
const asteroidCount = 10;
const asteroids = range(asteroidCount).map(i => {
  const asteroid = new Asteroid();
  asteroid.x = randomInt(-9, 9);
  asteroid.y = randomInt(-9, 9);
  return asteroid;
});

document.body.appendChild(stage('<canvas id=\'game-action-layer\'/>'));
const canvas = document.getElementById('game-action-layer');
canvas.setAttribute('height', '400');
canvas.setAttribute('width', '400');

const ctx = canvas.getContext('2d');
const mapCoordinates = toPixels(canvas.width, canvas.height, 20, 20);

const draw = (model, appearance = {}) => {
  const polygon = model.transformed().map(point => mapCoordinates(point[0], point[1]))
  trace(ctx, polygon);
  fillAndStroke(ctx, appearance);
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(ship, { lineWidth: 1, strokeStyle: 'Green'})
  asteroids.forEach(astroid => {
    draw(astroid, { lineWidth: 1, strokeStyle: 'Green'})
  });
  // requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);