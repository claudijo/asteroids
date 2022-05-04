import Ship from './models/ship';
import { range } from './libs/array';
import Asteroid from './models/asteroid';
import { randomInt } from './libs/number';
import stage from './templates/stage';
import { fillAndStroke, shade, toPixels, trace } from './utils/canvas';

const ship = new Ship();
const asteroidCount = 10;
let asteroids = range(asteroidCount).map(i => {
  const asteroid = new Asteroid();
  asteroid.x = randomInt(-9, 9);
  asteroid.y = randomInt(-9, 9);
  return asteroid;
});

document.body.appendChild(stage('<canvas id=\'game-action-layer\'/>'));
const canvas = document.getElementById('game-action-layer');
canvas.setAttribute('height', '400');
canvas.setAttribute('width', '400');

let isRotatingCounterClockWise = false;
let isRotatingClockWise = false;
let isFiringLaser = false;

window.addEventListener('keydown', event => {
  if (event.repeat) {
    return;
  }

  switch (event.key) {
    case 'ArrowLeft':
      isRotatingCounterClockWise = true;
      break;
    case 'ArrowRight':
      isRotatingClockWise = true;
      break;
    case ' ':
      isFiringLaser = true;
      break;
  }
});

window.addEventListener('keyup', event => {
  switch (event.key) {
    case 'ArrowLeft':
      isRotatingCounterClockWise = false;
      break;
    case 'ArrowRight':
      isRotatingClockWise = false;
      break;
    case ' ':
      isFiringLaser = false;
      break;
  }
});

const ctx = canvas.getContext('2d');
const mapCoordinates = toPixels(canvas.width, canvas.height, 20, 20);

const draw = (polygons, appearance = {}) => {
  const polygon = polygons.map(([x, y]) => mapCoordinates(x, y));
  ctx.save();
  trace(ctx, polygon);
  shade(ctx, appearance);
  fillAndStroke(ctx, appearance);
  ctx.restore();
};

const gameLoop = () => {
  if (isRotatingCounterClockWise) {
    ship.rotationAngle += 0.02;
  }
  if (isRotatingClockWise) {
    ship.rotationAngle -= 0.02;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(ship.transformed(), {
    lineWidth: 1,
    strokeStyle: 'Green',
    shadowColor: 'Green',
    shadowBlur: 3,
    fillStyle: 'White',
  });

  if (isFiringLaser) {
    const laser = ship.laserSegment();
    draw(laser, {
      lineWidth: 1,
      strokeStyle: 'Red',
      shadowColor: 'Red',
      shadowBlur: 3,
    })

    asteroids = asteroids.filter(asteroid => {
      return !asteroid.doesIntersect(laser)
    });
  }

  asteroids.forEach(asteroid => {
    draw(asteroid.transformed(), {
      lineWidth: 1,
      strokeStyle: 'Green',
      shadowColor: 'Green',
      shadowBlur: 3,
      fillStyle: 'White',
    });
  });

  requestAnimationFrame(gameLoop);
};

gameLoop();