import { clamp, valueMap } from './number';

export const shadeOf = (rgb, shade) => {
  let percent = 0;

  if (shade > 0) {
    percent = valueMap(0, 80, 0, 1, shade);
  } else if (shade < 0) {
    percent = valueMap(-100, 0, -1, 0, shade);
  }

  const r = clamp(rgb[0] + Math.floor(percent / 100 * 255), 0, 255);
  const g = clamp(rgb[1] + Math.floor(percent / 100 * 255), 0, 255);
  const b = clamp(rgb[2] + Math.floor(percent / 100 * 255), 0, 255);

  return `rgb(${r},${g},${b})`;
}

// export const shadeOf = (rgb, shade) => {
//   let [h, s, l] = rgbToHsl(...rgb);
//   l = shade;
//   const [r, g, b] = hslToRgb(h, s, l);
//   return `rgb(${r},${g},${b})`;
// }

const rgbToHsl = (r, g, b) => {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if(max == min){
    h = s = 0; // achromatic
  }else{
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
}

const hslToRgb = (h, s, l) => {
  var r, g, b;

  if(s == 0){
    r = g = b = l; // achromatic
  }else{
    function hue2rgb(p, q, t){
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [r * 255, g * 255, b * 255];
}