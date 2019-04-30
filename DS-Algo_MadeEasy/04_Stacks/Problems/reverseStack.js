const Stack = require('../Stacks');

const ReverseStack = (S) => {
    let data;
    if(S.isStackEmpty() === 0){
        return;
    }

    data = S.pop();
    ReverseStack(S);
    InsertAtBottom(S, data);
}

const InsertAtBottom = (S, data) => {
    let temp;
    if(S.isStackEmpty() === 0){
        S.push(data);
        return;
    }
    temp = S.pop();
    InsertAtBottom(S, data);
    S.push(temp);
}

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// stack.push(7);
// ReverseStack(stack);
// console.log(stack);