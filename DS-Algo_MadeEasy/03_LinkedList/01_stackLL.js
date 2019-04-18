const LinkedList = require('./LinkedList');

let stack = () => {
    let linkedList = LinkedList();

    const push = (value) => {
        linkedList.addLast(value);
    }

    const pop = () => {
        const removedHead = linkedList.removedHead();
        return removedHead ? removedHead.value : null;
    }

    const toArray = () => {
        console.log(linkedList.toArray())
        return linkedList.toArray();
    }
    return {
        push,
        pop,
        toArray
    }
}

let stack1 = stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);

console.log(stack1.toArray());