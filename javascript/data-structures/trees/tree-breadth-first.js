'use strict';

class TreeBreadthFirst {
  constructor(root = null){
    this.root = root;
  }
  max(){
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
  breadthFirst(tree){
    let array = [];
    let tempQueue = [];

    let temp = tree.root;
    tempQueue.push(temp);
    while(tempQueue.length>0){
      let currentNode = tempQueue[0];
      if (currentNode.left !== null) {
        tempQueue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        tempQueue.push(currentNode.right);
      }

      array.push(tempQueue.shift().value);
    }
    return array;
  }
}
module.exports=TreeBreadthFirst;
