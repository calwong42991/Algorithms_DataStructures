// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/* O(n) solution. Complete steps: O(n + n mod k).
 * Basic idea:
 * - start loop:
 * - revert the list while counter < k or no more nodes. 
 * - if no more nodes and counter < k, revert back the incomplete segment.
 */
function reverseNodesInKGroups(l, k) {
    var list = null,        // the return var. (first item)
        prevlast = null,    // last k group end node
        prev,               // previous node 
        last,               // last node of the current group
        tmp,                // tmp var
        i = 0;              // counter

    // k == 1 same list, no changes.
    if (k == 1) return l;
    
    while (l) {
        prev = null;
        last = l;

        // revert the first group
        for (; l && i < k; i++) {
            tmp = l.next;
            l.next = prev;
            prev = l;
            l = tmp;
        }
        
        // set first node or if not first, link the first node of the group 
        // to the previous group last node.
        if (!list) {
            list = prev;
        } else {
            prevlast.next = prev;
        }
        
        if (i == k) {
            // if group complete go to next
            prevlast = last;
            i = 0;
        } else {
            // if last group not complete, revert again and set i to k - i 
            // to get "complete" status (avoid infinite loop) after revert-revert,
            // set i start value to k - i.
            i = k - i;
            l = prev;
        }
    }

    return list;
}