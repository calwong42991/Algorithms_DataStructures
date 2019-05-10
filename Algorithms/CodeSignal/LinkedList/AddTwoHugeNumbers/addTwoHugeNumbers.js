function addTwoHugeNumbers(a, b) {
    a = reverseListNode(a);
    b = reverseListNode(b);

    let result = [];
    let carry = 0;

    while (a || b || carry) {
        if (!a) {
            a = new ListNode(0)
        };

        if (!b) {
            b = new ListNode(0)
        };

        if(a.value + b.value + carry > 9999 ){
            result.push(a.value + b.value + carry - 10000);
            carry = 1;
        } else {
            result.push(a.value + b.value + carry );
            carry = 0;
        }

        a = a.next;
        b = b.next;
    }
    return result.reverse();

}

function reverseListNode(a) {
    let prev = null;
    let current = a;
    let tmp = null;

    while (current) {
        tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    };
    return prev;

}