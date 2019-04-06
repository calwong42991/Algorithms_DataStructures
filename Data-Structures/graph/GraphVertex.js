const LinkedList = require('../linked-list/LinkedListClass');

class GraphVertex {
  constructor(value) {
    if(value === undefined){
      throw new Error(`Graph vertex must have a value`);
    }

    const edgeComparator = (edgeA, edgeB) => {
      if(edgeA.getKey() === edgeB.getKey()){
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    }

    this.value = value;
    this.edges = new LinkedList(edgeComparator);
  }

  addEdge() {};

  deleteEdge() {};

  getNeighbors() {};

  getEdges() {};

  getDegree() {};

  hasEdge() {};

  hasNeighbor() {};

  findEdge() {};

  getKey() {};

  deleteAllEdges() {};

  toString() {};

}

module.exports = GraphVertex;