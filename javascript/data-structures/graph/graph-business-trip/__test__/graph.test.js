'use strict';
const Vertex= require('../vertex');
const Graph = require('../graph');

describe('Graph', () => {

  it('businessTrip', () => {
    const myGraph = new Graph();

    myGraph.addVertex('amman');
    myGraph.addVertex('irbid');
    myGraph.addVertex('mafraq');
    myGraph.addVertex('zarqa');
    myGraph.addVertex('aqaba');
    myGraph.addVertex('al-jafr');


    myGraph.addDirectedEdge('amman', 'irbid', 10);
    myGraph.addDirectedEdge('amman', 'mafraq', 20);
    myGraph.addDirectedEdge('amman', 'zarqa', 30);
    myGraph.addDirectedEdge('amman', 'aqaba', 40);
    myGraph.addDirectedEdge('amman', 'al-jafr', 50);
    myGraph.addDirectedEdge('irbid', 'mafraq', 60);
    myGraph.addDirectedEdge('irbid', 'zarqa', 70);
    myGraph.addDirectedEdge('irbid', 'aqaba', 80);
    myGraph.addDirectedEdge('irbid', 'al-jafr', 90);
    myGraph.addDirectedEdge('mafraq', 'zarqa', 100);
    myGraph.addDirectedEdge('mafraq', 'aqaba', 110);
    myGraph.addDirectedEdge('mafraq', 'al-jafr', 120);
    myGraph.addDirectedEdge('zarqa', 'aqaba', 130);
    myGraph.addDirectedEdge('zarqa', 'al-jafr', 140);
    myGraph.addDirectedEdge('aqaba', 'al-jafr', 150);

    expect(myGraph.businessTrip(myGraph, ['amman', 'irbid', 'mafraq', 'zarqa', 'aqaba', 'al-jafr'])).toEqual([true, 450]);
  });
});
