const isArrayInSortedOrder = (array) => {
    let n = array.length;

    const sortedArray = (arr, n) => {
        if(n === 1 || n === 0){
            return 1
        }

        return arr[n - 1] < arr[n - 2] ? 0 : sortedArray(arr, n - 1);
    };

    return sortedArray(array, n) > 0 ? true : false;
}

console.log(isArrayInSortedOrder([1,2,3,4,5,6]));

