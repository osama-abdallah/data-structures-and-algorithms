'use strict';
const Bts = require('./BinarySearchTree');
const BTS = new Bts();
const MaxTree = require('./max-tree');
const Node = require('./node');

const BT = new MaxTree();

BTS.add(5);
BTS.add(6);
BTS.add(4);
BTS.add(80);

console.log(BTS.contains(8));
console.log(BTS);

BT.root = new Node(1, new Node(4, new Node(7), new Node(114)), new Node(3, new Node(9), new Node(6)));

console.log(BT.PreOrder());

console.log(BT.Max());
