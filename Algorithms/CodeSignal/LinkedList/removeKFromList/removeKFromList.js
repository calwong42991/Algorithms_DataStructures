function removeKFromList(l, k) {
    let current;


    if (!l) {
        return l;
    } else if (l.value === k) {
        l = l.next;
    }

    current = l;

    while (current && current.next) {
        if (current.next.value === k) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    if (current !== null && current.value === k) {
        l = l.next;
    }

    return l;
}