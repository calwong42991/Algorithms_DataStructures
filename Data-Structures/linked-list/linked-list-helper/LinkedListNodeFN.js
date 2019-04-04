const LinkedListNode = (val, nxt) => {
  let value = val;
  let next = nxt || null;

  const toString = (callback) => {
    return callback ? callback(value) : `${value}`;
  }

  return {
    toString
  }
}

module.exports = LinkedListNode;
