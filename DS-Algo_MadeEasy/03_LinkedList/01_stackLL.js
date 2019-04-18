const linkedList = require('./LinkedList');

let stack = () => {
    let linkedList = linkedList();

    const push = (value) => {
        linkedList.addLast(value);
    }

    const pop = () => {
        const removedHead = linkedList.removedHead();
        return removedHead ? removedHead.value : null;
    }
}