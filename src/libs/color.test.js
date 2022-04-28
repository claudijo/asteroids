import { hslToRgb, rgbToHex, rgbToHsl } from './color';

test('rgb to hex', () => {
  expect(rgbToHex(4, 98, 45)).toBe('#04622d')
})

test('rgb to hsl', () => {
  expect(rgbToHsl(4, 98, 45)).toBe('hsl(146,92.2%,20%)')
})

test('hsl to rgb', () => {
  expect(hslToRgb(146, 92.2, 20)).toBe('rgb(4,98,45)');
})