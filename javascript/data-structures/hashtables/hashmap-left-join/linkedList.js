'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  add(value){
    let newNode = new Node (value);

    if(!this.head){
      this.head = newNode;
      this.length = this.length+1;
      return ;
    }

    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = newNode;
    this.length = this.length+1;
  }

  contain(key){

    let current = this.head;

    while (current !==null){


      let keys =    Object.keys(current.value);

      if(keys[0]===key){

        return current.value;

      }else{

        current = current.next;
      }


    }
    return 'the key doesn\'t exist';
  }


  exist(key){

    let current = this.head;

    while (current !==null){


      let keys =    Object.keys(current.value);

      if(keys[0]===key){

        return true;

      }else{

        current = current.next;
      }


    }
    return false;
  }
}


module.exports = LinkedList;
