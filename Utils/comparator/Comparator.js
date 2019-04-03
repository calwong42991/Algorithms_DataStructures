const Comparator = (compareFunction) => {
  const defaultCompareFunction = (a, b) => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  let compare = compareFunction || defaultCompareFunction;

  const equal = (a, b) => {
    return compare(a, b) === 0;
  };

  const lessThan = (a, b) => {
    return compare(a,b) < 0;
  };

  const greaterThan = (a, b) => {
    return compare(a, b) > 0;
  };

  const lessThanOrEqual = (a, b) => {
    return lessThan(a, b) || equal(a,b);
  };

  const greaterThanOrEqual = (a, b) => {
    return greaterThan(a, b) || equal(a,b);
  };

  const reverse = () => {
    const compareOriginal = compare;
    compare = (a,b) => {
      compareOriginal(b, a)
    };
  };

  return {
    compare,
    equal,
    lessThan,
    greaterThan,
    lessThanOrEqual,
    greaterThanOrEqual,
    reverse
  }
}

module.exports = Comparator;

