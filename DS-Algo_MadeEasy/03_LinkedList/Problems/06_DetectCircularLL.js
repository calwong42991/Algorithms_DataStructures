const isCircular = (linkedList) => {
    let current = linkedList.head;

    let hash = {};

    while(current){
        if(!hash[current.value]){
            hash[current.value] = 'visted';
            current = current.next;
        } else {
            return true;
        }
    }
    return false;
}

const isCircularFloyd = (linkedList) => {
    let slow = linkedList.head;
    let fast = linkedList.head;

    while(fast.next.next){
        
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }

    return false;
}