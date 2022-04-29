const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return (this.tree === null) ? null : this.tree
  }

  add(data) {
    this.tree = addNode(this.tree, data);

    function addNode(current, data) {
      if (current === null) return new Node(data);
      if (current.data === data) return current;
      if (data < current.data) {
        current.left = addNode(current.left, data);
      } else {
        current.right = addNode(current.right, data);
      }
      return current;
    }
  }

  has(data) {
    return (this.find(data) === null) ? false : true;
  }

  find(data) {
    return search(this.tree, data);
    function search(current, data) {
      if (current === null) return null;
      if (current.data === data) return current;
      return (data < current.data) ? search(current.left, data) : search(current.right, data);
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(current, data) {
      if (current === null) {
        return null;
      } else if (data < current.data) {
        current.left = removeNode(current.left, data);
        return current;
      } else if (data > current.data) {
        current.right = removeNode(current.right, data);
        return current;
      }
      else {
        if (current.left === null && current.right === null) {
          current = null;
          return current;
        }
        if (current.left === null) {
          current = current.right;
          return current;
        } else if (current.right === null) {
          current = current.left;
          return current;
        }
        let minNode = findMin(current.right);
        current.data = minNode.data;
        current.right = removeNode(current.right, minNode.data);
        return current;
      }
    }

    function findMin(current) {
      if (current.left === null)
        return current;
      else
        return findMin(current.left);
    }
  }

  min() {
    if (this.tree === null) return null;
    let current = this.tree;
    while (current.left) {
      current = current.left;
    }
    return current.data
  }

  max() {
    if (this.tree === null) return null;
    let current = this.tree;
    while (current.right) {
      current = current.right;
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};

//  const tree = new BinarySearchTree();

// tree.add(9);
//       tree.add(14);
//       tree.add(54);
//       tree.add(2);
//       tree.add(6);
//       tree.add(8);
//       tree.add(31);
//       tree.add(1);
//       console.log(tree.has(54));//, true);
//       console.log(tree.has(8));//, true);
//       console.log(tree.has(7));//, false);
//       console.log(tree.has(4));//, false);

// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// console.log(tree.has(14));//, false);
// console.log(tree.has(8));//, false);
// console.log(tree.has(9));//, false);
// console.log(tree.has(2));//, true);
// console.log(tree.has(6));//, true);
// console.log(tree.has(128));//, true);
// console.log(tree.has(31));//, true);
// console.log(tree.has(54));//, true);
// console.log(tree.has(1));//, true);
