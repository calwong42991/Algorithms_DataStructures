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

