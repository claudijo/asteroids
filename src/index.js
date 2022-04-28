import stage from './templates/stage';
import polygon from './wireframes/dino.json';
import polyhedron from './wireframes/stanford-bunny.json';
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
} from './libs/vector';
import { shadeOf } from './libs/color';

document.body.appendChild(stage('<canvas id=\'game-action-layer\'/>'));
const canvas = document.getElementById('game-action-layer');
canvas.setAttribute('height', '300');

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


let xRotation = 0;
let yRotation = 0;
let zRotation = 0;

const render = (faces, light = [-2,-2,3]) => {
  for (let face of faces) {
    face = face.map(vector => rotateX(xRotation, vector));
    face = face.map(vector => rotateY(yRotation, vector));
    face = face.map(vector => rotateZ(zRotation, vector));

    // For each face, computes a vector of length 1 perpendicular to it
    const unitNormal = unit(normal(face));

    // Only proceeds if the z component of this vector is positive, or in other
    // words, if it points toward the viewer
    if (unitNormal[2] > 0) {
      face = scale(1, ...face);

      const fillStyle = shadeOf([255,0,255], (1 - dot(unit(normal(face)), unit(light))));
      face = translate([150, 200], ...face);
      const polygon = faceTo2d(face, [1, 0, 0], [0, 1, 0]);
      draw(polygon, { /*lineWidth: 1, strokeStyle: 'Black',*/ fillStyle});
    }
  }
}


const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  render(polyhedron);
  xRotation += 0.01;
  yRotation += 0.01;
  zRotation += 0.01;

  requestAnimationFrame(gameLoop);
}

gameLoop();


