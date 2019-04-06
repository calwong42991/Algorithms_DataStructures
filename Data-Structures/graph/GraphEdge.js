class GraphEdges {
  constructor(startVertex, endVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  getKey() {};
  reverse() {};
  toString() {};

}

module.exports = GraphEdges;