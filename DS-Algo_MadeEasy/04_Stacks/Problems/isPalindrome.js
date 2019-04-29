const Stack = require('../Stacks');

const isPalindrome = (str) => {

    let i = 0;
    let j = str.length;

    while (i < j && str[i] === str[j]) {
        i++;
        j--;
    }

    if (i < j) {
        console.log('not palindrome');
        return 0;
    } else {
        console.log('Palindrome');
        return 1;
    }
}

const isPalindrome1 = (str) => {
    let i = 0;
    let stack = new Stack();

    while (str[i] !== 'X') {
        stack.push(str[i]);
        i++;
    }

    i++;

    while (str[i]) {
        if (stack.isStackEmpty() || str[i] !== stack.pop()) {
            console.log('Not a Palindrome');
            return 0;
        }
        i++;
    }

    return stack.isStackEmpty();
}

console.log(isPalindrome1('abba'));