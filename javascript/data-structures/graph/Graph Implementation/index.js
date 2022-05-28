'use strict';


class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{

  constructor(){
    this.list = new Map();
  }

  addVertix(vertex){
    this.list.set(vertex, [] );
  }


  addDirectedEdge(startVertex, endVertex, weight = 0){
    if(! this.list.has(startVertex) || ! this.list.has(endVertex)){
      console.log('Invaild nodes');
    }

    const edge = new Edge(endVertex, weight);
    const start = this.list.get(startVertex);
    start.push(edge);

  }

  printAll(){
    for(const [vertex, edge] of this.list.entries()){
      console.log(vertex, edge);
    }
  }

}

const vertexOne = new Vertex(6);
const vertexTwo = new Vertex(5);
const vertexThree = new Vertex(4);
const vertexFour = new Vertex(3);
const vertexFive = new Vertex(7);

const graph = new Graph();


graph.addVertix(vertexOne );
graph.addVertix(vertexTwo );
graph.addVertix(vertexThree );
graph.addVertix(vertexFour );
graph.addVertix(vertexFive );

graph.addDirectedEdge(vertexOne, vertexTwo, 6);
graph.addDirectedEdge(vertexOne, vertexThree, 5);
graph.addDirectedEdge(vertexThree, vertexFour, 40);
graph.addDirectedEdge(vertexThree, vertexFive, 10);
graph.addDirectedEdge(vertexFour, vertexFive, 15);
graph.addDirectedEdge(vertexFive, vertexTwo, 21);
