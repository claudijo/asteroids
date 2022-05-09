import Ship from './models/ship';
import { range } from './libs/array';
import Asteroid from './models/asteroid';
import { random, randomInt } from './libs/number';
import stage from './templates/stage';
import { fillAndStroke, shade, toPixels, trace } from './utils/canvas';
import { length, toCartesian } from './libs/vector';
import Bullet from './models/bullet';
import Particle from './models/particle';
import './style/main.css';
import laserAudioUrl from './audio/laser.mp3';
import explosionAudioUrl from './audio/explosion.mp3';
import rocketAudioUrl from './audio/rocket.mp3';

let ship = null;
let asteroids = [];
let bullets = [];
let thrustParticles = [];
let explostionParticles = [];

const laserAudio = new Audio(laserAudioUrl);



document.body.appendChild(stage('<canvas id=\'game-action-layer\'/>'));
const canvas = document.getElementById('game-action-layer');
canvas.setAttribute('height', '400');
canvas.setAttribute('width', '400');

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
      // const rocketAudio = new Audio(rocketAudioUrl);
      // rocketAudio.play();
      isAccelerating = true;
      break;
    case ' ':
      // laserAudio.play();
      const bullet = new Bullet();
      [bullet.x, bullet.y] = ship.muzzle();
      bullet.vx = ship.vx;
      bullet.vy = ship.vy;
      bullet.rotationAngle = ship.rotationAngle;
      bullet.acceleration = 40;
      bullets.push(bullet)
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

const newRound = () => {
  ship = new Ship();
  asteroids = range(6).map(i => {
    const asteroid = new Asteroid();
    asteroid.x = randomInt(-9, 9);
    asteroid.y = randomInt(-9, 9);
    return asteroid;
  });
  bullets = [];
  thrustParticles = [];
}

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
    ship.acceleration = 12;

    const thrustParticlesCount = randomInt(1,5);
    for (let i = 0; i < thrustParticlesCount; i++) {
      const thrustParticle = new Particle();
      [thrustParticle.x, thrustParticle.y] = ship.tail();
      thrustParticle.vx = ship.vx;
      thrustParticle.vy = ship.vy;
      thrustParticle.reach = randomInt(3, 10)
      thrustParticle.rotationAngle = ship.rotationAngle - Math.PI + random(-0.2, 0.2);
      thrustParticle.acceleration = randomInt(20,30);
      thrustParticles.push(thrustParticle);
    }


  } else {
    ship.acceleration = 0;
  }

  if (isTurningLeft && !isTurningRight) {
    ship.rotationAngle += 0.1;
  } else if (!isTurningLeft && isTurningRight) {
    ship.rotationAngle -= 0.1;
  }

  ship.rotate(elapsed);
  ship.accelerate(elapsed);
  ship.move(elapsed);

  draw(ship.transformed(), {
    lineWidth: 1,
    strokeStyle: 'Blue',
    fillStyle: 'Lavender',
  });

  const scatteredAsteroids = [];
  let crash = false;

  asteroids = asteroids.filter(asteroid => {
    if (asteroid.doesCollide(ship)) {
      crash = true;
    }

    for (const bullet of bullets) {
      if (asteroid.doesCollide(bullet)) {
        const explosionAudio = new Audio(explosionAudioUrl);
        // explosionAudio.play();
        const explosionParticlesCount = randomInt(30,50) * (4 - asteroid.generation);
        for (let i = 0; i < explosionParticlesCount; i++) {
          const explosionParticle = new Particle();
          explosionParticle.x = asteroid.x + random(-0.2, 0.2)
          explosionParticle.y = asteroid.y + random(-0.2, 0.2)
          const rotationAngle = random(0, Math.PI * 2);
          let [vx, vy] = toCartesian([3, rotationAngle])
          explosionParticle.vx = vx;
          explosionParticle.vy = vy;
          explosionParticle.reach = randomInt(2,5);
          explosionParticle.rotationAngle = rotationAngle;
          explosionParticle.acceleration = randomInt(-3,-1);
          explostionParticles.push(explosionParticle);
        }


        bullet.reach = 0;
        if (asteroid.generation < 3) {
          range(3).forEach(_ => {
            const chip = new Asteroid(asteroid.generation + 1);
            chip.x = asteroid.x;
            chip.y = asteroid.y;
            scatteredAsteroids.push(chip);
          })
        }
        return false;
      }
    }

    return true;
  });

  asteroids = [...asteroids, ...scatteredAsteroids];

  asteroids.forEach(asteroid => {
    asteroid.move(elapsed);
    asteroid.rotate(elapsed);
    draw(asteroid.transformed(), {
      lineWidth: 1,
      strokeStyle: 'Green',
      fillStyle: 'Honeydew',
    });
  });

  bullets = bullets.filter(bullet => {
    return bullet.travelled < bullet.reach;
  });

  bullets.forEach(bullet => {
    bullet.accelerate(elapsed);
    bullet.move(elapsed);

    draw(bullet.transformed(), {
      lineWidth: 1,
      strokeStyle: 'Red',
      shadowColor: 'Pink',
      shadowBlur: 4,
    });
  });

  thrustParticles = thrustParticles.filter(particle => {
    return particle.travelled < particle.reach;
  });

  thrustParticles.forEach(particle => {
    particle.accelerate(elapsed);
    particle.move(elapsed);
    draw(particle.transformed(), {
      lineWidth: 1,
      strokeStyle: `rgba(255,${randomInt(128,255)},0,${(1 - particle.travelled / particle.reach)})`,
      shadowColor: 'White',
      shadowBlur: 1,
    });
  });

  explostionParticles = explostionParticles.filter(particle => {
    return particle.travelled < particle.reach;
  });

  explostionParticles.forEach(particle => {
    particle.accelerate(elapsed);
    particle.move(elapsed);
    draw(particle.transformed(), {
      lineWidth: 1,
      strokeStyle: `rgba(255,${randomInt(128,255)},0,${(1 - particle.travelled / particle.reach)})`,
      shadowColor: 'White',
      shadowBlur: 2,
    });
  })

  if (crash) {
    newRound();
  }

  requestAnimationFrame(gameLoop);
};

newRound();
gameLoop();