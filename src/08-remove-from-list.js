/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l1, k) {
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }
  let l = l1;
  let arr = [];
  while (l != null && l.next != null) {
    l = l.next;
    arr.push(l.value);
  }
  arr = arr.filter((el) => el !== k);

  return arr.reduceRight((accumulator, current) => {
    if (accumulator === null) {
      return new ListNode(current);
    }
    const temp = new ListNode(current);
    temp.next = accumulator;
    return temp;
  }, null);
}

module.exports = removeKFromList;
