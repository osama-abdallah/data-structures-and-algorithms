'use strict';

let Node = require('./node');
class LinkedList {
  constructor(){
    this.head = null;
  }
  kthFromEnd(k) {
    if (k < 0) {
      const error = new Error('Passed argument must be a positive integer');
      return error;
    }
    if (!this.head) {
      const error = new Error('Can not search an empty linked list.');
      return error;
    }
    let nodeCount = 0;
    let currentNode = this.head;
    while(currentNode !== null) {
      nodeCount += 1;
      currentNode = currentNode.next;
    }
    if (k > nodeCount) {
      const error = new Error('Search is beyond length of linked list');
      return error;
    } else if (k === nodeCount) {
      return this.head.value;
    } else {
      let placesFromHead = nodeCount - k;
      currentNode = this.head;
      for (let i = 0; i < (placesFromHead - 1); i++) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
}
console.log(Node);

module.exports = LinkedList;
