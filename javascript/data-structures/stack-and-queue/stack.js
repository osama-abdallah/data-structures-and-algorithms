'use strict';
const Node = require('./Node');


class Stack{
  constructor(){
    this.top=null;
    this.length=0;
  }

  push(value){
    if(this.isEmpty()){
      const newNode = new Node(value);
      this.top=newNode;
      this.length = this.length +1;
    }else{
      const newNode = new Node(value);
      newNode.next=this.top;
      this.top=newNode;
      this.length = this.length +1;
    }
  }

  pop(){
    if(this.isEmpty()){
      return 'Is empty';
    }else{
      const temp = this.top;
      this.top=this.top.next;
      temp.next=null;
      this.length = this.length -1;
      return temp.value;
    }
  }

  peek(){
    if(this.isEmpty()){
      return 'No node';
    }else{
      return this.top.value;
    }
  }








  isEmpty(){
    return this.length === 0;
  }




}
module.exports=Stack;
