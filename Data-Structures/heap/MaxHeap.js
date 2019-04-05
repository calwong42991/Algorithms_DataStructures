const Heap = require('./Heap');

class MaxHeap extends Heap {

  pairIsICorrectOrder(firstElement, secondElement){
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}

module.exports = MaxHeap;