const binary = (n) => {

  const arr = [];

  let recursion = (n) => {
    if (n < 1) {
      console.log(arr);
    } else {
      arr[n - 1] = 0;
      recursion(n - 1);
      arr[n - 1] = 1;
      recursion(n - 1);
    }
  }
  recursion(n);
}

console.log(binary(3))