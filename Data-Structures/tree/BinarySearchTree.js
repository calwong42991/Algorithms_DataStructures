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

  get leftHeight() {};

  get rightHeight() {};

  get height() {};

  get balanceFactor() {};

  get uncle() {};

  setValue(node) {};

  setRight() {};

  removeChild(nodeToRemove) {};

  replaceChild() {};

  static copyNode() {};

  traverseInOrder() {};

  toString() {};
}

module.exports = BinaryTreeNode;