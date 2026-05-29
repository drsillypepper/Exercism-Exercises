// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let array1Number = Number(array1.map(num => String(num)).join(""));
  let array2Number = Number(array2.map(num => String(num)).join(""));
return array1Number + array2Number;

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reversed_str = String(value).split("").reverse().join("");
  return String(value) == reversed_str;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input == "" || input == "undefined" || input == null){
    return "Required field";
  }
  else if(Number(input) == 0 || isNaN(Number(input))){
    return "Must be a number besides 0"
  }
  else{
    return "";
  }
}
