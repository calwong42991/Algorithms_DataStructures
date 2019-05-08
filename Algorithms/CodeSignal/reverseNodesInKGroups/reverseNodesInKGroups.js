// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseNodesInKGroups(l, k) {
    var list = null,
        prevLast = null,
        prev,
        last,
        tmp,
        count = 0;

    if(k === 1 ){
        return l;
    }

    while(l){
        prev = null;
        last = l;

        for(count; l && count < k; count++){
            tmp = l.next;
            l.next = prev;
            prev = l;
            l = tmp;
        }

        if(!list){
            list = prev;
        } else {
            prevLast.next = prev;
        }

        if(i == k){
            prevLast = last;
            count = 0;
        } else {
            i = k - i;
            l = prev;
        }
    }
    return list;
}