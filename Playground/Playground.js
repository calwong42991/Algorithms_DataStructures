const LinkedList = require('../Data-Structures/linked-list/LinkedListClass');

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(4); 
linkedList.reverse();
console.log(linkedList.toArray());



