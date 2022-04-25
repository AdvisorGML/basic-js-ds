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
 class List {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  remove(k) {
    let current = this.head;
    let index=0;
    while(current){
    this.removeEl(this.IndexOf(k));
    current=current.next
    }
  }

  IndexOf(el) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === el) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  removeEl(pos) {
    if (pos < 0 || pos >= this.length) {
      console.log(this.head);
      return this.head;}

    let current = this.head;
    if (pos === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;
      while (index < pos) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    this.length--;
    return pos;
  }
/////////////////////////////////////////////
enqueue(value) {
  if (this.length === 0) {
    this.head = new ListNode(value)
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value)
  }
  this.length++;
}

////////////////////////////////////////////


}


 const list = new List();

function removeKFromList(l, k) {
console.log(l);
  list.remove(k);
}



module.exports = {
  removeKFromList
};


[3, 1, 2, 3, 4, 5]

list.enqueue(3);
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.enqueue(5);
removeKFromList(1,3);