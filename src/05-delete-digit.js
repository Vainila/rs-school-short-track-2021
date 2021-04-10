/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  function find(val, ind, arr) {
    if (ind === 0 && val < arr[ind + 1]) { return val; }
    if (ind > 0 && (val < arr[ind + 1] && val < arr[ind - 1])) { return val; }
    if (val < arr[ind - 1]) { return val; }
    return false;
  }

  const newNum = (`${n}`).split('');
  newNum[newNum.findIndex(find)] = '';
  return +newNum.join('');
}
// console.log(deleteDigit(109));
module.exports = deleteDigit;
