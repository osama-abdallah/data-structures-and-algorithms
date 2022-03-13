'use strict';

let Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  static zipLists(linkedListOne, linkedListTwo) {
    let listOneCurrent = linkedListOne.head;
    let listTwoCurrent = linkedListTwo.head;
    if (!listOneCurrent) {
      const error = new Error('Linked list one is empty');
      return error;
    } else if (!listTwoCurrent) {
      const error = new Error('Linked list one is empty');
      return error;
    }

    while(listOneCurrent.next !==null) {
      if(listTwoCurrent) {
        linkedListTwo.head = listTwoCurrent.next;
        listTwoCurrent.next = listOneCurrent.next;
        listOneCurrent.next = listTwoCurrent;
        listOneCurrent = listTwoCurrent.next;
        listTwoCurrent = linkedListTwo.head;
      } else { break; }
    }
    if (listTwoCurrent) {
      listOneCurrent.next = listTwoCurrent;
    }

    return linkedListOne.head;
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
