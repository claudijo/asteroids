import { range, sum, zip } from './array';

export const add = (...vectors) => {
  return vectors[0].map((_, i) => {
    return vectors.reduce((acc, vector) => {
      return acc + vector[i];
    }, 0);
  });
};

export const subtract = (vec1, vec2) => {
  return vec1.map((n, i) => n - vec2[i]);
};

export const multiply = (scalar, vector) => {
  return vector.map(n => n * scalar);
};

export const length = vector => {
  return Math.sqrt(sum(...vector.map(num => num ** 2)));
};

export const translate = (translation, ...vectors) => {
  return vectors.map(vector => add(translation, vector));
};

export const scale = (scalar, ...vectors) => {
  return vectors.map(vector => multiply(scalar, vector));
};

export const distance = (vec1, vec2) => {
  return length(subtract(vec1, vec2));
};

export const perimeter = (...vectors) => {
  return sum(...vectors.map((vector, i) => {
    return distance(vector, vectors[(i + 1) % vectors.length]);
  }));
};

export const toCartesian = polar => {
  const [length, angle] = polar;
  return [
    length * Math.cos(angle),
    length * Math.sin(angle),
  ];
};

export const toPolar = cartesian => {
  const [x, y] = cartesian;
  const angle = Math.atan2(y, x);
  return [length(cartesian), angle];
};

export const rotate = (angle, vector) => {
  const [l, a] = toPolar(vector);
  return toCartesian([l, a + angle]);
};

// Measure vector alignment. Used to check if vectors are perpendicular without
// doing any trigonometry.
export const dot = (vec1, vec2) => {
  const products = vec1.map((n, i) => n * vec2[i]);
  return sum(...products);
};

export const angleBetween = (vec1, vec2) => {
  return Math.acos(dot(vec1, vec2) / (length(vec1) * length(vec2)));
};

// Measuring oriented area. Only meaningful for 3d vectors. Cross product is
// orientation dependant and helps keeping track of orientation in our
// computations. Given two input vectors, the cross product outputs a result
// that is perpendicular to both, and how perpendicular they input vectors are
// (ie. how big area the two input vectors span). When drawing 3d on a 2d canvas,
// the cross product helps us decide which polygons are visible
export const cross = (u, v) => {
  const [ux, uy, uz] = u;
  const [vx, vy, vz] = v;
  return [
    uy * vz - uz * vy,
    uz * vx - ux * vz,
    ux * vy - uy * vx,
  ];
};

// extracts the part of any 3D vector pointing in a given direction
export const component = (vector, direction) => {
  return dot(vector, direction) / length(direction);
};

export const vectorTo2d = (vector, rightDir = [1, 0, 0], upDir = [0, 1, 0]) => {
  return [
    component(vector, rightDir),
    component(vector, upDir),
  ];
};

export const faceTo2d = (face, rightDir = [1, 0, 0], upDir = [0, 1, 0]) => {
  return face.map(vertex => vectorTo2d(vertex, rightDir, upDir));
};

// takes a vector and returns another in the same direction but with length 1
export const unit = vector => {
  return multiply(1 / length(vector), vector);
};

// takes a face and gives us a vector perpendicular to it
export const normal = face => {
  return cross(subtract(face[1], face[0]), subtract(face[2], face[0]));
};

export const rotateX = (angle, vector) => {
  const [x, y, z] = vector;
  const [rotatedY, rotatedZ] = rotate(angle, [y, z]);
  return [x, rotatedY, rotatedZ];
};

export const rotateY = (angle, vector) => {
  const [x, y, z] = vector;
  const [rotatedX, rotatedZ] = rotate(angle, [x, z]);
  return [rotatedX, y, rotatedZ];
};

export const rotateZ = (angle, vector) => {
  const [x, y, z] = vector;
  const [rotatedX, rotatedY] = rotate(angle, [x, y]);
  return [rotatedX, rotatedY, z];
};

export const linearCombination = (scalars, ...vectors) => {
  const scaled = scalars.map((s, i) => multiply(s, vectors[i]));
  return add(...scaled);
};

export const multiplyMatrixVector = (matrix, vector) => {
  return linearCombination(vector, ...zip(...matrix));
};

export const matrixMultiply = (a, b) => {
  return a.map(row => {
    return zip(...b).map(col => {
      return dot(row, col);
    });
  });
};

export const translate3d = (translation, vector) => {
  const [a, b, c] = translation;
  const [x, y, z] = vector;
  const m = [
    [1, 0, 0, a],
    [0, 1, 0, b],
    [0, 0, 1, c],
    [0, 0, 0, 1],
  ];
  const v = [x, y, z, 1];
  const [xOut, yOut, zOut, _] = multiplyMatrixVector(m, v);
  return [xOut, yOut, zOut];
};

export const inferMatrix = (n, transformation) => {
  const d = range(n);

  const standardBasisVector = d.map(row => {
    return d.map(col => {
      return row === col ? 1 : 0;
    });
  });

  const cols = standardBasisVector.map(vector => transformation(vector));
  return zip(...cols);
};

// From https://stackoverflow.com/a/24392281 and https://stackoverflow.com/a/58657254
// Alternative approach might use https://github.com/lovasoa/linear-solve/blob/master/gauss-jordan.js
// returns intersection point if the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
export const intersection = (u1, u2, v1, v2) => {
  const [a, b] = u1;
  const [c, d] = u2;
  const [p, q] = v1;
  const [r, s] = v2;
  const det = (c - a) * (s - q) - (r - p) * (d - b);

  // Parallel lines
  if (det === 0) {
    return null;
  }

  const lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
  const gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;

  if ((0 < lambda && lambda < 1) && (0 < gamma && gamma < 1)) {
    return [
      a + lambda * (c - a),
      b + lambda * (d - b),
    ];
  }

  return null;
};

export const doSegmentsIntersect = (s1, s2) => {
  const [u1, u2] = s1;
  const [v1, v2] = s2;
  const d1 = distance(u1, u2);
  const d2 = distance(v1, v2);
  const i = intersection(u1, u2, v1, v2);
  if (i === null) {
    return false;
  }

  return distance(u1, i) <= d1 &&
    distance(u2, i) <= d1 &&
    distance(v1, i) <= d2 &&
    distance(v2, i) <= d2;
};

export const field = (source, x, y) => {
  const relativePosition = [x - source.x, y - source.y];
  return scale(source.force, relativePosition)[0];
}