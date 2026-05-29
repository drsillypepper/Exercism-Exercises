// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { start } from "node:repl";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for(let i = 0; i < birdsPerDay.length; i++){
    totalCount += birdsPerDay[i];
  }
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const weekIndex = week - 1
  const startDay = 7 * weekIndex;
  const endDay = 7 * weekIndex + 7;
  let totalCount = 0;
  for(let i = startDay; i < endDay; i++){
    totalCount += birdsPerDay[i];
  }
  return totalCount;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i++){
    birdsPerDay[i] = i % 2 == 0 ? birdsPerDay[i] +1 : birdsPerDay[i];
  }
}

