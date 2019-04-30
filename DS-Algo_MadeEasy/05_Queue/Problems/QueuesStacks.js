const Stack = require('../../04_Stacks/Stacks');

class Queue {
    constructor(){
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enQueue(value) {
        this.pushStack.push(value);
    };

    deQueue() {
        
        if(this.popStack.isStackEmpty() > 0){
            console.log('in here')
            return this.popStack.pop();
        } else {
            while(!this.pushStack.isStackEmpty() === 0){
                this.pushStack.push(this.popStack.pop());
            }

            return this.popStack.pop();
        }
    };
}

const test = new Queue();

// test.enQueue(1);
// test.enQueue(2);
// test.enQueue(3);
// test.enQueue(4);
// test.enQueue(5);
// test.enQueue(6);
// test.enQueue(7);

console.log(test.deQueue());

console.log(test)