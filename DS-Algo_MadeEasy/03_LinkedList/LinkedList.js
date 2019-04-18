const node = (val, nex) => {
    let value = val;
    let next = nex;

    const setValue = (v) => {
        value = v;
    };

    const getValue = () => {
        return value;
    };

    const setNext = (n) => {
        next = n;
    };

    const getNext = () => {
        return next || null;
    };


    return {
        setValue,
        getValue,
        setNext,
        getNext
    }
}

const linkedList = () => {

    let headNode = null;
    let nodesCount = 0;

    const getHead = () => {
        return headNode
    };

    const getCount = () => {
        return nodesCount;
    };

    const find = (val) => {
        let current = headNode;

        while (current) {
            if (current.getValue() === val) {
                return `${val} is in the linked list with these functions ${current}`;
            }
            current = current.getNext();
        }

        return current;
    };

    const addFirst = (value) => {
        if (headNode === null) {
            headNode = node(value);
        } else {
            headNode = node(value, headNode);
        }
        nodesCount += 1;
    };

    const addLast = (value) => {
        if (headNode === null) {
            headNode = node(value);
        } else {
            let current = headNode;
            while (current.getNext() !== null) {
                current = current.getNext();
            }
            current.setValue(value);
        }
        nodesCount += 1;
    };

    const addBefore = (value, newValue) => {
        let prev = null;
        let current = headNode;

        while (current !== null) {
            if (current.getValue === value) {
                if (prev === null) {
                    addFirst(newValue);
                } else {
                    prev.setNext(node(newValue, current));
                    nodesCount += 1;
                }
            } else {
                prev = current;
                current = current.getNext();
            }
        }

        if (current === null) {
            throw new Error(`node ${value} not found`);
        }

    };

    const addAfter = (value, newValue) => {
        let current = headNode;
        while (current !== null) {
            if (current.getValue() === value) {
                current.setNext(node(newValue, current.getNext()));
                nodesCount += 1;
                break;
            } else {
                current = current.getNext();
            }
        }

        if (current === null) {
            throw new Error(`node ${value} not found`);
        }
    };

    const removeFirst = () => {
        if (headNode !== null) {
            if (headNode.getNext() === null) {
                headNode = null;
            } else {
                headNode = headNode.getNext();
            }
            nodesCount -= 1;
        }
    };

    const removeLast = () => {
        let prev = null;
        let current = headNode;
        while (current.getNext() !== null) {
            prev = current;
            current = current.getNext();
        }
        if (prev === null) {
            removeFirst();
        } else {
            prev.setNext(null);
            nodesCount -= 1;
        }
    };

    const remove = (value) => {
        let prev = null;
        let current = headNode;
        while (current !== null) {
            if (current.getValue() === value) {
                if (prev === null) {
                    removeFirst();
                } else {
                    prev.setNext(current.getNext());
                    nodesCount -= 1;
                }
            } else {
                prev = current;
                current = current.getNext();
            }
        }
    };

    const traverse = ({
        callback
    }) => {
        let current = headNode;
        while (current !== null) {
            callback(current);
            current = current.getNext();
        }
    };

    const toArray = (arr) => {
        const arr = [];
        traverse(n => arr.push(n.getValue()));
        return arr;
    };

    const clear = () => {
        headNode = null;
        count = 0;
    };


    return {
        getHead,
        getCount,
        find,
        addFirst,
        addLast,
        addBefore,
        addAfter,
        removeFirst,
        removeLast,
        remove,
        traverse,
        toArray,
        clear
    }
};