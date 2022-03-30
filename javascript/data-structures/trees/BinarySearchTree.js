'use strict';
const BinaryTree = require('./Binarytree');
const Node = require('./node');

class BinarySearchTree extends BinaryTree{
  constructor(root){
    super(root);
  }
  contains(value) {

    let BT = new BinaryTree(this.root);
    let newArr = BT.PreOrder();
    let result = newArr.includes(value);
    return result;
  }

  add(value) {
    let currentNode;
    if (Number.isInteger(value)) { currentNode = new Node(value); } else { return null; }
    if (!this.root) {
      this.root = currentNode;
    } else {
      let _addNode = (node, currentNode) => {
        if (currentNode.value < node.value) {
          if (!node.left) {
            node.left = currentNode;
          } else {
            _addNode(node.left, currentNode);
          }
        } else {
          if (!node.right) {
            node.right = currentNode;
          } else {
            _addNode(node.right, currentNode);
          }
        }
      };
      _addNode(this.root, currentNode);
    }
  }
}
module.exports=BinarySearchTree;
