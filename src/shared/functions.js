export function getNrInRange(rangeMin, rangeMax, nr) {
  return Math.max(rangeMin, Math.min(nr, rangeMax));
}

export function loadImage(imageElement) {
  return new Promise(resolve => {
    imageElement.onload = resolve;
  });
}
