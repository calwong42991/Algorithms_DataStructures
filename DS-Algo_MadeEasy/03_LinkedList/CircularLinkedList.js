const node = (val, nex) => {
    value = val;
    next = nex;

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

const circularLinkedList = () => {
    let headNode = null;
    let nodeCount = 0;

    const getHead = () => {
        return headNode;
    }

    const getCount = () => {
        return nodeCount;
    }

    const print = () => {
        if (headNode === null) {
            return null;
        } else {
            let current = headNode;

            while (current !== null) {
                console.log(current.getValue());
                current = current.getNext();
            }
        }
    }

    const insertLast = (value) => {
        let newValue = node(value, headNode);

        if (headNode === null) {
            headNode = newValue;
        } else {
            let current = headNode;
            while (current.getNext() !== null) {
                current = current.getNext();
            }

            current.setNext(newValue);
        }
    }

    return {
        getHead,
        getCount,
        print,
        insertLast
    }
}