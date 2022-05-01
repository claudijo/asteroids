import stage from './templates/stage';
import polygon from './wireframes/dino.json';
import polyhedron from './wireframes/goblet.json';
import { fillAndStroke, trace } from './utils/canvas';
import {
  add,
  dot,
  faceTo2d,
  multiply,
  normal,
  rotate,
  rotateX,
  rotateY,
  rotateZ,
  scale,
  translate,
  unit,
  length,
} from './libs/vector';
import { shadeOf } from './libs/color';
import { shade, tint } from './libs/color_old';
import { clamp } from './libs/number';

document.body.appendChild(stage('<canvas id=\'game-action-layer\'/>'));
const canvas = document.getElementById('game-action-layer');
canvas.setAttribute('height', '300');

let paused = false;

let elapsed1 = 0;
let elepsed2 = 0;

canvas.addEventListener('click', () => {
  // paused = !paused;

  console.log({elapsed1, elepsed2})
})

const ctx = canvas.getContext('2d');

const draw = (polygon, appearance = {}) => {

  // const vectors = polygon
  //   .map(vector => {
  //     vector = multiply( 10, vector);
  //     vector = rotate(Math.PI, vector);
  //     vector = add([150, 75], vector);
  //     return vector;
  //   });

  trace(ctx, polygon);
  fillAndStroke(ctx, appearance);
}

// draw(polygon, { lineWidth: 1, strokeStyle: 'Black', fillStyle: 'Cornsilk' });


let xRotation = Math.PI / 2;
let yRotation = 0;
let zRotation = 0;

const render = (faces, light = [-1,-2,1]) => {
  const sortedFaces = [];

  const start1 = performance.now()
  for (let face of faces) {
    face = face.map(vector => rotateX(xRotation, vector));
    face = face.map(vector => rotateY(yRotation, vector));
    face = face.map(vector => rotateZ(zRotation, vector));

    // For each face, computes a vector of length 1 perpendicular to it.. skipped unit
    const faceNormal = normal(face);

    // Only proceeds if the z component of this vector is positive, or in other
    // words, if it points toward the viewer
    if (faceNormal[2] > 0) {
      sortedFaces.push(face);
    }
  }
  elapsed1 = performance.now() - start1;

  sortedFaces.sort((a,b) => {
    return a[0][2] - b[0][2];
  })

  const start2 = performance.now();
  sortedFaces.forEach(face => {
    // const shade = 1 - (dot(unit(normal(face)), unit(light)));
    const shade = dot(unit(normal(face)), unit(light));
    const fillStyle = shadeOf([0,0,255], shade);

    face = scale(100, ...face);
    face = translate([150, 200], ...face);
    const polygon = faceTo2d(face, [1, 0, 0], [0, 1, 0]);
    draw(polygon, { lineWidth: 1, strokeStyle: fillStyle, fillStyle});
  })
  elepsed2 = performance.now() - start2;
}


const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  render(polyhedron);
  if (!paused) {
    xRotation += 0.01;
    yRotation += 0.02;
    zRotation += 0.01;
  }


  requestAnimationFrame(gameLoop);
}

gameLoop();


