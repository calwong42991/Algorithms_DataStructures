// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
// Basic idea: 
// - Revert the two list for the right positional notation.
// - Add values while one of them have node or carry not 0.
// - Return result.
//
function addTwoHugeNumbers(a, b) {
    var sum = null,
        tmp,
        carry = 0,
        x, y,
        revertList = list => {
            var prev = null;
            while (list) {
                tmp = list.next;
                list.next = prev;
                prev = list;
                list = tmp;
            }
            return prev;
        }

    a = revertList(a);
    b = revertList(b);

    while (a || b || carry) {
        x = a ? a.value : 0;
        y = b ? b.value : 0;
        
        tmp = new ListNode((carry + x + y) % 1e4);
        tmp.next = sum;
        sum = tmp;
        carry    = (carry + x + y) / 1e4 | 0;
        
        if (a) a = a.next;
        if (b) b = b.next;
    }
    return sum;
}


