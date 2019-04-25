const isPalindrome = (str) => {
    
    let i = 0;
    let j = str.length;

    while( i < j && str[i] === str[j]){
        i++;
        j--;
    }

    if(i < j){
        console.log('not palindrome');
        return 0;
    } else{
        console.log('Palindrome');
        return 1;
    }
}