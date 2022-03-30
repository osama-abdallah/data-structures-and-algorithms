'use strict';

const MaxTree = require('./max-tree');
const Node = require('./node');

const BT = new MaxTree();

BT.root = new Node(1, new Node(4, new Node(7), new Node(114)), new Node(3, new Node(9), new Node(6)));

console.log(BT.PreOrder());

console.log(BT.Max());
