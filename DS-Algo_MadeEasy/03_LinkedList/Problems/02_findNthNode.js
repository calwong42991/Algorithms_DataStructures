const linkedList = require('../LinkedListClass');

// Brute Force
const findNth = (linkedList, n) => {

    let current = linkedList.head;
    let count = 0;

    while(current){
        current = current.next;
        count += 1;
    }

    console.log(count);

    if(count <=  n - 1){
        return `fewer number of nodes in the list`
    } 
    
    current = linkedList.head;

    for(let i = 0; i < count - n ; i++){
        current = current.next;
    }
    
    return current;

}

let test1 = new linkedList();
test1.append(1);
test1.append(2);
test1.append(3);
test1.append(4);
test1.append(5);
test1.append(6);


console.log('Array: ', test1.toArray());

console.log('Test: ', findNth(test1, 4));
