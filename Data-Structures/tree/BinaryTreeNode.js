const Comparator = require('../../Utils/comparator/ComparatorClass');
const HashTable = require('../hash-table/hashTable');


class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    this.meta = new HashTable();

    this.nodeComparator = new Comparator();
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  };

  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  };

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  };

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  };

  get uncle() {
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return undefined;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right;
    }

    return this.parent.parent.left;

  };

  setValue(node) {
    this.value = value;
    return this;
  };

  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  };

  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (node) {
      this.right.parent = this;
    }

    return this;
  };

  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }

    return false;
  };

  replaceChild(nodeToReplace, replacmentNode) {
    if (!nodeToReplace || !replacmentNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacmentNode;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.right = replacmentNode;
      return true;
    }

    return false;
  };

  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  };

  traverseInOrder() {
    let traverse = [];

    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    traverse.push(this.value);

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  };

  toString() {
    return this.traverseInOrder().toString();
  };
}

module.exports = BinaryTreeNode;