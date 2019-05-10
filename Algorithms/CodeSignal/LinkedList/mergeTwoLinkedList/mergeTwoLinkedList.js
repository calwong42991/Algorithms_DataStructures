// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function mergeTwoLinkedLists(l1, l2) {
    let rootNode,
        currentNode,
        currentL1 = l1,
        currentL2 = l2;


    if(!l1){
        return l2;
    } 

    if(!l2){
        return l1;
    }

    if(currentL1.value < currentL2.value){
        rootNode = currentL1;
        currentNode = currentL1;
        currentL1 = currentL1.next;
    } else {
        rootNode = currentL2;
        currentNode = currentL2;
        currentL2 = currentL2.next;
    }

    while(currentL1 || currentL2){
        if(currentL1 === null){
            currentNode.next = currentL2;
            currentNode = currentL2;
            currentL2 = currentL2.next;
        } else if(currentL2 === null){
            currentNode.next = currentL1;
            currentNode = currentL1;
            currentL1 = currentL1.next;
        } else if(currentL1.value < currentL2.value){
            currentNode.next = currentL1;
            currentNode = currentL1;
            currentL1 = currentL1.next;
        } else {
            currentNode.next = currentL2;
            currentNode = currentL2;
            currentL2 = currentL2.next;
        }
    }

    return rootNode;
}