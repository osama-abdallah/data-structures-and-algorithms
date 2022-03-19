'use strict';
const Node = require('./Node');
const Stack = require('./stack');

class PseudoQueue extends Stack {
  constructor() {
    super();
    this.stackTwo = new Stack();
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    this.stackTwo.push(value);
    if (!this.fornt) {
      this.front = this.stackTwo.top;
      this.rear = this.stackTwo.top;
      this.stackTwo.top = null;
      return;
    } else {
      this.front.next = this.stackTwo.top;
      this.rear = this.stackTwo.top;
      this.stackTwo.top = null;
    }
    return;
  }
  dequeue() {
    if (!this.front) {
      throw 'Can not remove from an empty pseudostack!';
    }
    if (this.front === this.rear) {
      let dequeuedVal = this.front.value;
      this.front = null;
      this.rear = null;
      return dequeuedVal;
    } else {
      let dequeuedVal = this.front;
      this.front = this.front.next;
      dequeuedVal.next=null;
      return dequeuedVal.value;
    }
  }
  peek() {
    if (!this.front) {
      throw 'Can not peek at an empty pseudoqueue!';
    } else {
      return this.front.value;
    }
  }
}
console.log(Node);
module.exports = PseudoQueue;
