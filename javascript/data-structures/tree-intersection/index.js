'use strict';

const HashMap = require('./HashTable/hash');
const Node = require('./BinaryTree/node');
const BinaryTree  = require ('./BinaryTree/binaryTree');

const BT1 = new BinaryTree();
const BT2 = new BinaryTree();

const myHash = new HashMap(10);

BT1.root = new Node(150, new Node(100, new Node(75), new Node(160 , new Node(125) , new Node(175))), new Node(250, new Node(200), new Node(350 , new Node(300) , new Node(500))));
BT2.root = new Node(42, new Node(100, new Node(15), new Node(160 , new Node(125) , new Node(175))), new Node(600, new Node(200), new Node(350 , new Node(4) , new Node(500))));



console.log(myHash.tree_intersection(BT1,BT2));
