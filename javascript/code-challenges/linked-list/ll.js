'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  include(value) {
    const node = new Node(value);
console.log(node);
    if (!this.head) {
      return false;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {

        if (currentNode.value === value) {
          return true;
        } else {

          currentNode = currentNode.next;
          if (currentNode.next === null) {

            return currentNode.value === value;
          }
        }

      }
    }

  }

  stringTo(){
    let res ='';
    if(!this.head){
      return res ='Empty list'; 
    }else{
      let currentNode = this.head;
      while(currentNode.next){
        res = res + `{${currentNode.value}} -> `;
        currentNode =currentNode.next;
        if(currentNode.next === null){
          res =res+`{${currentNode.value}} -> `+`NULL`;
          return res;
        }
      }
    }

  }

}

module.exports = LinkedList;
