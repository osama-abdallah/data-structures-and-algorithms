'use strict';

const Vertex = require('../vertex');
const Graph = require('../graph');

describe('Graph', () => {

  it('bradth first', () => {
    let expected='2,4,3,5';
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);
    myGraph.addVertex(three);
    myGraph.addVertex(four);
    myGraph.addVertex(five);

    myGraph.addDirectedEdge(zero, two);
    myGraph.addDirectedEdge(two, four);
    myGraph.addDirectedEdge(two, three);
    myGraph.addDirectedEdge(four, five);

    expect(myGraph.BreadthFirst(two)).toEqual(expected);
  });
});
