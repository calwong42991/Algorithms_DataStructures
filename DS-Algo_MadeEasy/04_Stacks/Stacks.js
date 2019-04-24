class Stack {
    constructor(cap = null) {
        this.top = -1;
        this.capacity = cap;
        this.data = [];
    }

    isStackEmpty() {
        return this.top < 0 ? 1 : 0;
    }

    isStackFull() {
        return this.top === this.capacity ? 1 : 0;
    }

    push(value) {
        if (this.isStackFull() > 0) {
            return 'Stack OverFlow';
        }

        this.top++;
        this.data.push(value);
    }

    pop() {
        if (this.isStackEmpty() === 0) {
            return 'Stack is Empty';
        } else {
            const deleted = this.data[this.top];
            this.top--;
            return deleted;
        }
    }

    deleteStack() {
        this.top = -1;
        this.capacity = cap;
        this.data = [];
    }
}

// let stack = new Stack(10);
// console.log(stack.isStackEmpty());
// console.log(stack.isStackFull());

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.push(8);
// stack.push(9);
// stack.push(10);
// console.log(stack.push(11));
// console.log(stack.push(12));
// stack.push(13);
// stack.push(14);
// console.log('stacked pop: ', stack.pop());
// console.log('stacked pop: ', stack.pop());

// console.log(stack);

module.exports = Stack;