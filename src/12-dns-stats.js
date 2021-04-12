/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains1) {
  let domains = domains1;
  function setResMap(val1, res) {
    const val = (`.${val1.split('.').reverse().join('.')}`);
    if (res.has(val)) {
      res.set(val, (res.get(val) + 1));
    } else {
      res.set(val, 1);
    }
  }
  const res = new Map();

  const biggestSize = Math.max(...domains.map((string) => {
    const string1 = string.split('.');
    return string1.length;
  }));

  for (let i = 0; i < biggestSize; i++) {
    if (i === 0) {
      domains.map((domainStr) => {
        setResMap(domainStr, res);
        return domainStr;
      });
    } else {
      domains = domains.map((domainStr) => {
        const domainStr1 = domainStr.replace(/[\w]+./, '');
        if (domainStr1 !== '') {
          setResMap(domainStr1, res);
        }
        return domainStr1;
      });
    }
  }
  return Object.fromEntries(res);
}

module.exports = getDNSStats;
