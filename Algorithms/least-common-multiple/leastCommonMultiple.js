const euclideanAlgo = require('../Euclidean Algorithm/euclideanAlgorithm');

const leastCommonMultiple = (a, b) => {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgo(a, b);
};

module.exports = leastCommonMultiple;