'use strict';

class MaxTree {
  constructor(root = null){
    this.root = root;
  }
  Max(){

    let max = null;
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.value > max) { max = currentNode.value; }
        if (currentNode.left) { traverseTree(currentNode.left); }
        if (currentNode.right) { traverseTree(currentNode.right); }
      };
      traverseTree(currentNode);
      return max;
    }
  }
}
module.exports=MaxTree;
