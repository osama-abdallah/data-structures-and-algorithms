'use strict';

let Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
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

  insertBefore(value, newVal) {

    const node = new Node(newVal);
    if (!this.head) {
      const error = new Error('Can not search an empty linked list.');
      return error;
    }
    let currentNode = this.head;

    while (currentNode !== null) {
      if (this.head.value === value) {
        this.insert(newVal);
        break;
      }
      if (currentNode.next.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (!currentNode) {
      return new Error('Value not found in list.');
    }
  }

  insertAfter(value, newVal) {

    const node = new Node(newVal);
    if (!this.head) {
      const error = new Error('Can not search an empty linked list.');
      return error;
    }
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.next === null) {
        this.append(newVal);
        break;
      }
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (!currentNode) {
      return new Error('Value not found in list.');
    }
  }
  insert(value) {

    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return;
  }}
module.exports = LinkedList;
