const fibonacciNth = (n) => {
  let currentValue = 1;
  let previousValue = 0;

  if(n === 1){
    return 1;
  }

  let iterationsCounter = n - 1;

  while(iterationsCounter) {
    let tmp = currentValue;
    currentValue += previousValue;
    previousValue = tmp;

    iterationsCounter--;
  }

  return currentValue;
}

module.exports = fibonacciNth;

console.log(fibonacciNth(5));
console.log(fibonacciNth(10));