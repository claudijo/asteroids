import Ship from './models/ship';
import { range } from './libs/array';
import Asteroid from './models/asteroid';
import { randomInt } from './libs/number';
import stage from './templates/stage';
import { fillAndStroke, shade, toPixels, trace } from './utils/canvas';
import { length } from './libs/vector';
import Bullet from './models/bullet';

const ship = new Ship();
const asteroidCount = 10;
let asteroids = range(asteroidCount).map(i => {
  const asteroid = new Asteroid();
  asteroid.x = randomInt(-9, 9);
  asteroid.y = randomInt(-9, 9);
  return asteroid;
});

let bullets = [];

document.body.appendChild(stage('<canvas id=\'game-action-layer\'/>'));
const canvas = document.getElementById('game-action-layer');
canvas.setAttribute('height', '400');
canvas.setAttribute('width', '400');

let isFiringLaser = false;
let isAccelerating = false;
let isTurningLeft = false;
let isTurningRight = false;

window.addEventListener('keydown', event => {
  if (event.repeat) {
    return;
  }

  switch (event.key) {
    case 'ArrowLeft':
      isTurningLeft = true;
      break;
    case 'ArrowRight':
      isTurningRight = true;
      break;
    case 'ArrowUp':
      isAccelerating = true;
      break;
    case ' ':
      const bullet = new Bullet();
      [bullet.x, bullet.y] = ship.muzzle();
      bullet.vx = ship.vx;
      bullet.vy = ship.vy;
      bullet.rotationAngle = ship.rotationAngle;
      bullet.acceleration = 60;
      bullets.push(bullet)
      // isFiringLaser = true;
      break;
  }
});

window.addEventListener('keyup', event => {
  switch (event.key) {
    case 'ArrowLeft':
      isTurningLeft = false;
      break;
    case 'ArrowRight':
      isTurningRight = false;
      break;
    case 'ArrowUp':
      isAccelerating = false;
      break;
    case ' ':
      // isFiringLaser = false;
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

let lastTime = performance.now();

const gameLoop = () => {
  const now = performance.now();
  const elapsed = now - lastTime;
  lastTime = now;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isAccelerating) {
    ship.acceleration = 4;
  } else {
    ship.acceleration = 0;
  }

  if (isTurningLeft && !isTurningRight) {
    ship.rotationAngle += 0.08;
  } else if (!isTurningLeft && isTurningRight) {
    ship.rotationAngle -= 0.08;
  }

  ship.rotate(elapsed);
  ship.accelerate(elapsed);
  ship.move(elapsed);

  draw(ship.transformed(), {
    lineWidth: 1,
    strokeStyle: 'Green',
    shadowColor: 'Green',
    shadowBlur: 3,
    fillStyle: 'White',
  });

  // if (isFiringLaser) {
  //   const laser = ship.laserSegment();
  //   draw(laser, {
  //     lineWidth: 1,
  //     strokeStyle: 'Red',
  //     shadowColor: 'Red',
  //     shadowBlur: 3,
  //   });
  //
  //   asteroids = asteroids.filter(asteroid => {
  //     return !asteroid.doesIntersect(laser);
  //   });
  // }

  asteroids.forEach(asteroid => {
    asteroid.move(elapsed);
    asteroid.rotate(elapsed);
    draw(asteroid.transformed(), {
      lineWidth: 1,
      strokeStyle: 'Green',
      shadowColor: 'Green',
      shadowBlur: 3,
      fillStyle: 'White',
    });
  });

  bullets = bullets.filter(bullet => {
    return bullet.travelled < bullet.reach;
  });

  asteroids = asteroids.filter(asteroid => {
    for (const bullet of bullets) {
      if (asteroid.doesCollide(bullet)) {
        bullet.reach = 0;
        return false;
      }
    }

    return true;
  });

  bullets.forEach(bullet => {
    bullet.accelerate(elapsed);
    bullet.move(elapsed);

    draw(bullet.transformed(), {
      lineWidth: 1,
      strokeStyle: 'Red',
      shadowColor: 'Red',
      shadowBlur: 3,
    });
  })



  requestAnimationFrame(gameLoop);
};

gameLoop();