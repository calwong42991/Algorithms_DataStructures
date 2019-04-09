const euclideanAlgorithmInteractive = (originalA, originalB) => {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  while(a && b && a !== b){
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  return a || b;
};

module.exports = euclideanAlgorithmInteractive;
