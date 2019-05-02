class Heap {
    constructor() {
        this.heapContainer = [];
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }
}