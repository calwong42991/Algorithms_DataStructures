const Heap = require('./Heap');

class MinHeap extends Heap {

  pairIsICorrectOrder(firstElement, secondElement){
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}

module.exports = MinHeap;