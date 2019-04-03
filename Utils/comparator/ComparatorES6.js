class Comparator {
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0
    };
    return a < b ? -1 : 0;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  };

  lessThan(a, b) {
    return this.compare(a, b) < 0;
  };

  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  };

  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  };

  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  };

  reverse(a, b) {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  };

};

module.exports = Comparator;