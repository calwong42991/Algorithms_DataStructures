function isListPalindrome(l) {
    let arr = [];

    let current = l;

    while (current) {
        arr.push(current.value);

        current = current.next;

    }

    return isPalindrome(arr);

}


function isPalindrome(arr) {

    if (arr.length === 1 || arr.length === 0) {
        return true;
    }

    if (arr[0] !== arr[arr.length - 1]) {
        return false;
    }

    return isPalindrome(arr.splice(1, arr.length - 2))
}
