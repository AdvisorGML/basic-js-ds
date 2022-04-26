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
    throw new NotImplementedError('Not implemented');
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
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

// tree.add(20);
// tree.add(25);
// tree.add(2);
// console.log(tree);