'use strict';

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  PreOrder(){
    let array =[];
    const _walk=(node)=>{
      array.push(node.value);
      if(node.left){
        _walk(node.left);
      }
      if (node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return array;
  }

  PostOrder(){
    let array =[];
    const _walk=(node)=>{


      if(node.left){
        _walk(node.left);
      }
      if (node.right){
        _walk(node.right);
      }
      array.push(node.value);
    };
    _walk(this.root);
    return array;
  }

  InOrder(){
    let array =[];
    const _walk=(node)=>{

      if(node.left){
        _walk(node.left);
      }
      array.push(node.value);

      if (node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return array;
  }

}
module.exports=BinaryTree;
