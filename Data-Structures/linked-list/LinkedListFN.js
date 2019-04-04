const LinkedListNode = require('./linked-list-helper/LinkedListNodeFN');
const Comparator = require('../../Utils/comparator/ComparatorFN');

const LinkedList = (comparatorFunction) => {
  let head = null;
  let tail = null;

  let compare = Comparator(comparatorFunction);

  const prepend = (value) => {
    const newNode = LinkedListNode(value, head);

    head = newNode;

    if (!tail) {
      tail = newNode;
    }

  };

  const append = (value) => {
    const newNode = LinkedListNode(value);

    if (!head) {
      head = newNode;
      tail = newNode;
    }

    tail.next = newNode;
    tail = newNode;
  };

  const deleteValue = (value) => {
    if (!head) {
      return null;
    }

    let deletedNode = null;

    if (head && compare.equal(head.value, value)) {
      deletedNode = head;
      head = head.next
    }

    let currentNode = head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (compare.equal(tail.value, value)) {
      tail = currentNode;
    }

    return deletedNode;
  };

  const find = (value = undefined, callback = undefined) => {
    if (!head) {
      return null;
    }

    let currentNode = head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  };

  const deleteTail = () => {
    const deletedTail = tail;

    if(head === tail){
      head = null;
      tail = null;
      return deletedTail;
    }

    let currentNode = head;

    while(currentNode.next){
      if(!currentNode.next.next){
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    tail = currentNode;
    return deleteTail;
  };

  const deleteHead = () => {
    if(!head){
      return null;
    }

    const deletedHead = head;

    if(this.head.next){
      head = head.next;
    } else {
      head = null;
      tail = null;
    }
    return deletedHead;
  };

  const fromArray = (values) => {
    values.forEach(value => append(value));
  };

  const toArray = () => {
    const nodes = [];

    let currentNode = head;
    while(currentNode){
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  };

  const reverse = () => {
    let currNode = head;
    let prevNode = null;
    let nextNode = null;

    while(currNode){
      nextNode = currNode.next;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }
    
    tail = head;
    head = prevNode;

  };

  return {
    prepend,
    append,
    deleteValue,
    find,
    deleteTail,
    deleteHead,
    fromArray,
    toArray,
    reverse
  }
}

module.exports = LinkedList;