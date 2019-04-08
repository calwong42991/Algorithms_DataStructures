const fibonacci = (n) => {
  const fibSequence = [1];

  let currentValue = 1;
  let previousValue = 0;

  if(n === 1){
    return fibSequence;
  }

  let iterationsCounter = n - 1;

  while(iterationsCounter){
    let tmp = currentValue;
    currentValue += previousValue;
    previousValue = tmp;

    fibSequence.push(currentValue);

    iterationsCounter--;
  }
  return fibSequence;
};

module.exports = fibonacci;

console.log(fibonacci(10));