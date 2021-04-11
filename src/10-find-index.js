/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const val = value;
  let ind = 0;
  if (val <= array[array.length / 2]) {
    for (let i = 0; i < array.length; i++) {
      if (val === array[i]) {
        ind = i;
        return i;
      }
    }
  } else {
    for (let i = array.length; i > 0; i--) {
      if (val === array[i]) {
        ind = i;
        return i;
      }
    }
  }
  return ind;
}

module.exports = findIndex;
