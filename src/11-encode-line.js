/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  const temp = [];
  let ltrs = '';
  let counter = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (i > 0) {
      if (strArr[i - 1] !== strArr[i]) {
        ltrs = '';
        ltrs += strArr[i];
        counter = 1;
      }
      if (strArr[i - 1] === strArr[i]) {
        ltrs += strArr[i];
        counter++;
      }
      if (i + 1 > strArr.length || strArr[i + 1] !== strArr[i]) {
        ltrs += strArr[i];
        if (counter === 1) { counter = ''; }
        temp.push(`${counter}${ltrs[0]}`);
      }
    }
    if (i === 0 && strArr[1] !== strArr[0]) {
      temp.push(strArr[0]);
    }
  }
  return temp.join('');
}
encodeLine('');
module.exports = encodeLine;
