// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function mergeTwoLinkedLists(l1, l2) {

    if (!l1 || !l2) {
        return null;
    }

    let ret = null;
    let prev = null;

    while (l1 && l2) {
        if (l1.value < l2.value) {
            if (prev) {
                prev.next = li;
                prev = li;
            } else {
                ret = li;
                prev = li;
            }
            l1 = l1.next;
        } else {
            if (prev) {
                prev.next = l2;
                prev = l2;
            } else {
                ret = l2;
                prev = l2;
            }
            l2 = l2.next;
        }
    }

    if (!l1) {
        prev ? prev.next = l2 :
            ret = l2;
    } else {
        prev ? prev.next = l1 :
            ret = l1;
    }

    return ret;
}