import stage from './templates/stage';
import polygon from './wireframes/dino.json';
import polyhedron from './wireframes/teapot.json';
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
  length, matrixMultiply, multiplyMatrixVector, translate3d, vectorTo2d, inferMatrix,
} from './libs/vector';
import { shadeOf } from './libs/color';
import { shade, tint } from './libs/color_old';
import { clamp } from './libs/number';

document.body.appendChild(stage('<canvas id=\'game-action-layer\'/>'));
const canvas = document.getElementById('game-action-layer');
canvas.setAttribute('height', '300');


const ctx = canvas.getContext('2d');

const draw = (polygon, appearance = {}) => {
  trace(ctx, polygon);
  fillAndStroke(ctx, appearance);
};

const rotationTransformation = angle => vector => rotateX(angle, vector);
const rotationMatrix = inferMatrix(3, rotationTransformation(Math.PI / 2))

const render = (faces, light = [-1, -2, 1]) => {
  const sortedFaces = [];

  const animatedRotationMatrix = getRotationMatrix(performance.now())
  const animatedTranslation = getTranslation(performance.now());

  for (let face of faces) {
    face = face.map(vector => multiplyMatrixVector(rotationMatrix, vector));
    face = face.map(vector => multiplyMatrixVector(animatedRotationMatrix, vector))
    face = face.map(vector => translate3d([1,1.5,0], vector));
    face = scale(100, ...face);

    // For each face, computes a vector of length 1 perpendicular to it.. skipped unit
    const faceNormal = normal(face);

    // Only proceeds if the z component of this vector is positive, or in other
    // words, if it points toward the viewer
    if (faceNormal[2] > 0) {
      sortedFaces.push(face);
    }
  }

  sortedFaces.sort((a, b) => {
    return a[0][2] - b[0][2];
  });

  sortedFaces.forEach(face => {
    const shade = dot(unit(normal(face)), unit(light));
    const fillStyle = shadeOf([0, 0, 255], shade);

    const polygon = faceTo2d(face, [1, 0, 0], [0, 1, 0]);
    draw(polygon, { lineWidth: 1, strokeStyle: fillStyle, fillStyle });
  });
};

const getRotationMatrix = t => {
  const seconds = t / 1000;
  return [
    [Math.cos(seconds), 0, -Math.sin(seconds)],
    [0, 1, 0],
    [Math.sin(seconds), 0, Math.cos(seconds)],
  ];
};

const getTranslation = t => {
  const seconds = t / 1000;
  return [Math.cos(seconds) + 1, -Math.sin(seconds) + 1, 0];
}

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  render(polyhedron);
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);


