const reverseLL = (linkedList) => {
    let head = linkedList.head;
    let temp = null;
    let nextNode = null;

    while (head) {
        nextNode = head.next;
        head.next = temp;
        temp = head;
        head = nextNode;
    }
    return temp;
}