export const sum = (...nums) => {
  return nums.reduce((acc, num) => acc + num);
}

export const multiply = (...nums) => {
  return nums.reduce((acc, num) => acc * num);
}

export const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
}

export const zip = (...arrays) => {
  return arrays[0].map((_, i) => {
    return arrays.map(array => array[i]);
  });
}