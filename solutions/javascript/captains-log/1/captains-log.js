// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const NCC = "NCC"
  const registryNumber = Math.round(1000 + Math.random() * (10000-1000));
  return `${NCC}-${registryNumber}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000 + Math.random() * (42000-41000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let planetClasses = ["D","H","J","K","L","M","N","R","T","Y"];
  return planetClasses[Math.floor(Math.random()*planetClasses.length)];
}
