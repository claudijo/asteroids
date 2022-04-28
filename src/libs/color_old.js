import { clamp } from './number.js';

const ColorNames = {
  // Basic colors
  WHITE: '#FFFFFF',
  SILVER: '#C0C0C0',
  GRAY: '#808080',
  BLACK: '#000000',
  RED: '#FF0000',
  MAROON: '#800000',
  YELLOW: '#FFFF00',
  OLIVE: '#808000',
  LIME: '#00FF00',
  GREEN: '#008000',
  AQUA: '#00FFFF',
  TEAL: '#008080',
  BLUE: '#0000FF',
  NAVY: '#000080',
  FUCHSIA: '#FF00FF',
  PURPLE: '#800080',
};

const componentsFromColorName = colorName => {
  const hexString = ColorNames[colorName.toUpperCase()];
  if (!hexString) {
    throw new Error('Invalid color name: ' + colorName);
  }
  return componentsFromHexString(hexString);
};

const colorPercentageFromHex = hex => {
  return parseInt(hex, 16) / 255;
};

const hexFromColorPercentage = percentage => {
  return (clamp(Math.round(255 * percentage), 0, 255))
    .toString(16)
    .padStart(2, '0');
};

const componentsFromHexString = hexString => {
  const r = colorPercentageFromHex(hexString.slice(1, 3));
  const g = colorPercentageFromHex(hexString.slice(3, 5));
  const b = colorPercentageFromHex(hexString.slice(5, 7));
  return [r, g, b];
};

const hexStringFromComponents = components => {
  return `#${components.map(hexFromColorPercentage).join('')}`;
};

const normalizeColor = color => {
  if (Array.isArray(color)) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return componentsFromHexString(color);
  }

  return componentsFromColorName(color);
};

const mix = (color1, color2, alpha) => {
  return [
    color1[0] + (color2[0] - color1[0]) * alpha,
    color1[1] + (color2[1] - color1[1]) * alpha,
    color1[2] + (color2[2] - color1[2]) * alpha,
  ];
};

export const blend = (color, mixWithColor) => {
  const color1 = normalizeColor(color);
  const color2 = normalizeColor(mixWithColor);

  return alpha => hexStringFromComponents(mix(color1, color2, alpha));
};

export const shade = color => {
  const black = [0, 0, 0];
  return blend(color, black);
};

export const tint = color => {
  const white = [1, 1, 1];
  return blend(color, white);
};

export const tone = color => {
  const gray = [0.5, 0.5, 0.5];
  return blend(color, gray);
};


