export function getNrInRange(rangeMin, rangeMax, nr) {
  return Math.max(rangeMin, Math.min(nr, rangeMax));
}
