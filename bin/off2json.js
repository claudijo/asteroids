const fs = require('fs');

let numOfVertices = NaN;
let numOfFaces = NaN;
let numOfEdges = NaN;

const vertices = [];
const faces = [];

const file = 'teapot'

try {
  const lines = fs.readFileSync(`./assets/${file}.off`, 'utf8').toString().split('\n');

  for (const line of lines) {
    if (line.trim().toUpperCase() === 'OFF') {
      continue;
    }

    if (line.trim().startsWith('#')) {
      continue;
    }

    if (line.trim() === '') {
      continue;
    }

    if (isNaN(numOfVertices) && isNaN(numOfFaces) && isNaN(numOfEdges)) {
      [numOfVertices, numOfFaces, numOfEdges] = line.split(/\s+/);
      continue;
    }

    if (vertices.length < numOfVertices) {
      vertices.push(line.trim().split(/\s+/).map(Number));
      continue;
    }

    if (faces.length < numOfFaces) {
      const parts = line.trim().split(/\s+/);
      const numOfVertices = Number(parts[0]);
      const indicesOfComposingVertices =  parts.slice(1, numOfVertices + 1).map(Number);
      faces.push(indicesOfComposingVertices.map(index => vertices[index]));
    }

  }
} catch (err) {
  console.error(err)
}

try {
  fs.writeFileSync(`./src/wireframes/${file}.json`, JSON.stringify(faces));
  // file written successfully
} catch (err) {
  console.error(err);
}

