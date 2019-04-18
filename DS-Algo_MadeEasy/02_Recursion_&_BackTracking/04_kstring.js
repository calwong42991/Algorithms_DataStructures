const k_string = (n, k) => {
    let arr = [];

    const recursion = (n, k) => {
        if(n < 1){
            console.log(arr);
        } else {
            for(let i = 0; i < k; i++){
                arr[n - 1] = i;
                recursion(n - 1, k);
            }
        }
    }
    recursion(n, k);
}

console.log(k_string(3,2));