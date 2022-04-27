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
    return (!this.tree) ? null : this.tree
  }

  add(data) {
    this.tree = addNode(this.tree, data);

    function addNode(current, data) {
      if (!current) return new Node(data);
      if (current.data === data) return current;

      if (data < current.data) {
        current.left = addNode(current.left, data);
      } else {
        current.rigth = addNode(current.rigth, data);
      }
      return current;
    }

  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return (this.find(data) === null) ? false : true;
  }

  find(data) {
    return search(this.tree, data);
    function search(current, data) {
      if (!current) return null;
      if (current.data === data) return current;
      return (data < current.data) ? search(current.left, data) : search(current.rigth, data);
    }
    // throw new NotImplementedError('Not implemented');
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
  }

  min() {
    throw new NotImplementedError('Not implemented');
  }

  max() {
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();

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