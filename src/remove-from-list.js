const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(list, k) {
  // console.log('INPUT:');
  // console.log(list);
  let head = list;
  if (!head) {
    console.log('NO ELEMENT');
    return;
  }
  if (head && head.value === k) {
    head = head.next;
    this.length--;
  }
  current = head;
  if (current != null) {
    while (current.next) {
      if (current.next.value === k) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current.next;
      }
    }
  }
  // console.log('RETURN: ');
  // console.log(head);
  return head;
}

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// const expected = convertArrayToList([1, 2, 4, 5]);
// removeKFromList(initial, 3);







module.exports = {
  removeKFromList
};


// [3, 1, 2, 3, 4, 5]

// list.enqueue(3);
// list.enqueue(1);
// list.enqueue(2);
// list.enqueue(3);
// list.enqueue(4);
//  list.enqueue(5);
//  console.log(list)
//  removeKFromList(list, 3);
// console.log(k);
// console.log(l);