const ListNode2 = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *

 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

class Queue extends ListNode {
  get size() {
    let counter = 0;
    if (this.value) { counter = 1; }
    let obj = new Object(this.next);
    counter++;
    let objNext = obj.next;
    while (objNext != null) {
      obj = new Object(objNext);
      objNext = obj.next;
      counter++;
    }

    return counter;
  }

  enqueue (element) {
    if (this.value === undefined) {
      this.value = element;
    } else if (this.next == null) {
      this.next = new ListNode(element);
    } else {
      let obj = new Object(this.next);
      let objNext = obj.next;
      while (objNext != null) {
        obj = new Object(objNext);
        objNext = obj.next;
      }
      obj.next = new ListNode2(element);
    }
  }

  dequeue() {
    const tempValue = this.value;
    const tempObj = new Object(this.next);
    this.value = tempObj.value;
    this.next = tempObj.next;
    return tempValue;
  }
}

// const queue123 = new Queue();
// console.log(queue123.enqueue(1))
// queue123.enqueue(1);
// console.log(queue123.enqueue(1))
// console.log(queue123.enqueue(1))
// console.log("enqueue_res = "+queue123.dequeue());
// queue123.enqueue(2);
// queue123.enqueue(3);

// console.log("size = "+queue123.size);

// console.log(queue123)
module.exports = Queue;
