export const clamp = (num, min, max) => {
  return Math.max(min, Math.min(num, max));
}

export const valueMap = (outMin, outMax, inMin, inMax, inValue) => {
  const diffIn = inValue - inMin;
  const rangeIn = inMax - inMin;
  const percentage = diffIn / rangeIn;

  const diff = outMax - outMin;
  return outMin + diff * percentage;
}