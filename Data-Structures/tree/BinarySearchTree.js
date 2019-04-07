const BinarySearchTreeNode = require('./BinaryTreeNode');

class BinarySearchTree {
  constructor(nodeValueCompareFunction) {
    this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction);

    this.nodeComparator = this.root.nodeComparator;
  }

  insert() {};

  contains() {};

  remove() {};

  toString() {};
}

module.exports = BinarySearchTree;