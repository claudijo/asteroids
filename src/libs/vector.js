import { sum } from './array';

export const add = (vec1, vec2) => {
  return vec1.map((n, i) => n + vec2[i]);
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
}

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
}

export const rotate = (angle, vector) => {
  const [l, a ] = toPolar(vector);
  return toCartesian([l, a + angle]);
}

// Measure vector alignment. Used to check if vectors are perpendicular without
// doing any trigonometry.
export const dot = (vec1, vec2) => {
  const products = vec1.map((n, i) => n * vec2[i]);
  return sum(...products);
}

export const angleBetween = (vec1, vec2) => {
  return Math.acos(dot(vec1, vec2) / (length(vec1) * length(vec2)));
}

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
    ux * vy - uy * vx
  ]
}

// extracts the part of any 3D vector pointing in a given direction
export const component = (vector, direction) => {
  return dot(vector, direction) / length(direction);
}

export const vectorTo2d = (vector, rightDir = [1, 0, 0], upDir = [0, 1, 0]) => {
  return [
    component(vector, rightDir),
    component(vector, upDir)
  ]
}

export const faceTo2d = (face, rightDir = [1, 0, 0], upDir = [0, 1, 0]) => {
  return face.map(vertex => vectorTo2d(vertex, rightDir, upDir));
}

// takes a vector and returns another in the same direction but with length 1
export const unit = vector => {
  return multiply(1 / length(vector), vector)
}

// takes a face and gives us a vector perpendicular to it
export const normal = face => {
  return cross(subtract(face[1], face[0]), subtract(face[2], face[0]))
}

export const rotateX = (angle, vector) => {
  const [x, y, z] = vector;
  const [rotatedY, rotatedZ] = rotate(angle, [y, z]);
  return [x, rotatedY, rotatedZ];
}

export const rotateY = (angle, vector) => {
  const [x, y, z] = vector;
  const [rotatedX, rotatedZ] = rotate(angle, [x, z]);
  return [rotatedX, y, rotatedZ];
}

export const rotateZ = (angle, vector) => {
  const [x, y, z] = vector;
  const [rotatedX, rotatedY] = rotate(angle, [x, y]);
  return [rotatedX, rotatedY, z];
}