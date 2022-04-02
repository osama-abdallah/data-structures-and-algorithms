'use strict';

const TreeBreadthFirst = require('../tree-breadth-first');
const Node = require('../node');

describe('breathFirst', () => {

  test('should return breathFirst', () => {
    const BT = new TreeBreadthFirst();
    BT.root =new Node(1, new Node(4, new Node(7), new Node(114)), new Node(3, new Node(9), new Node(6)));
    expect(BT.breadthFirst(BT)).toEqual([1,4,3,7,114,9,6]);
  });
});
