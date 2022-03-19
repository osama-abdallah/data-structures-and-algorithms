'use strict';

const Node = require('./Node');

class Queue{
  constructor(){
    this.front = null;
    this.rear=null;
    this.length=0;
  }
  enqueue(value){
    if(this.isEmpty()){
      const newNode = new Node(value);
      this.front = newNode;
      this.rear=newNode;
      this.length = this.length + 1;
    }else{
      const newNode = new Node(value);
      this.rear.next=newNode;
      this.rear=newNode;
      this.length = this.length + 1;

    }
  }

  dequeue(){
    if(this.isEmpty()){
      return ' No Node';
    }
    else if(this.length === 1){
      const temp = this.front;
      this.front = this.front.next;
      this.rear=this.rear.next;
      temp.next = null;
      this.length = this.length - 1;
      return temp.value;
    }

    else{
      const temp = this.front;
      this.front = this.front.next;
      temp.next=null;
      this.length = this.length - 1;
      return temp.value;
    }
  }


  peek(){
    if(this.isEmpty()){
      return 'No Node';
    }else{
      return this.front.value;
    }
  }
  isEmpty(){
    return this.length === 0;
  }
}

module.exports=Queue;
