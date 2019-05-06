function addTwoHugeNumbers(a, b) {
    let max = 10000;
    let carry = 0;
    let sum = 0;
    let arr1 = [];
    let a1 = reverseListNode(a);
    let b1 = reverseListNode(b);
    while (a1 || b1) {
        if (!a1) {
            a1 = new ListNode(0);
        } else if (!b1) {
            b1 = new ListNode(0);
        }

        let sum = parseInt(a1.value) + parseInt(b1.value);
        if (carry > 0) {
            sum += carry;
        }
        carry = parseInt(sum / max);
        arr1.push(sum % max);
        if (a1.next && !b1.next) {
            b1.next = new ListNode(0);
        } else if (a1.next && !b1.next) {
            a1.next = new ListNode(0);
        }
        a1 = a1.next;
        b1 = b1.next;
    }
    if (carry > 0) {
        arr1.push(carry);
    }
    return [...arr1].reverse();

}

function reverseListNode(a) {
    let a1 = null;
    let prev = null;
    while (a) {
        prev = a1;
        a1 = new ListNode(a.value);
        a1.next = prev;
        a = a.next;
    }
    return a1;
}
