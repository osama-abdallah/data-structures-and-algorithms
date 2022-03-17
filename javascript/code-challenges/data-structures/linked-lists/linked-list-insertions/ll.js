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
  }
  include(testValue) {

    if(!this.head) {
      return false;
    }
    let currentNode = this.head;
    while(currentNode !== null) {
      if (currentNode.value === testValue) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  toString() {

    let arrayString = '';
    let currentNode = this.head;

    if (!this.head) {
      return `NULL`;
    } else {
      arrayString = `{${this.head.value}} -> `;
    }

    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      arrayString += `{${currentNode.value}} -> `;
    }
    arrayString += `NULL`;

    return arrayString;
  }
}
module.exports = LinkedList;
