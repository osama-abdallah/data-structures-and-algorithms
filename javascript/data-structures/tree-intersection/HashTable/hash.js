'use strict';
const LinkedList = require('../linkedList/linkedList');
class HashMap{
  constructor(size){
    this.size = size,
    this.map = new Array(size);
  }




  getHash (key){
    const withPrime = key * 599;
    return withPrime % this.size;
  }

  set(key ,value){
    const hash = this.getHash(key);
    const entry = {[key] :value};




    if(!this.map[hash]){
      this.map[hash]=new LinkedList();
    }


    this.map[hash].add(entry);

  }


  get(key){
    const hash = this.getHash(key);
    return this.map[hash].contain(key);
  }


  contain(key){
    const hash = this.getHash(key);
    if(this.map[hash]){
      return this.map[hash].exist(key);
    }else{
      return false;
    }

  }

  repeatedWord(string){
    let newArr = string.replace(/[,-]/g,'').split(' ');

    for (let i = 0 ; i<newArr.length ; i++) {
      let array = [];

      let lowerItem = newArr[i].toLowerCase();
      this.set(lowerItem,lowerItem);

      let hash = this.getHash(lowerItem);
      let current =   this.map[hash].head;
      if(current.next){
        while (current !== null){
          array.push(Object.keys(current.value)[0] );
          current = current.next;
        }

        const toFindDuplicates = array => array.filter((item, index) => array.indexOf(item) !== index);
        const duplicateElementa = toFindDuplicates(array);
        if(duplicateElementa.length > 0 ){
          return duplicateElementa[0];}

      }

    }

  }


  tree_intersection(tree1 , tree2){


    let array1 = tree1.PreOrder();
    let array2 = tree2.PreOrder();

    array1.forEach(item =>{
      this.set(item , item );
    });

    array2.forEach(item =>{
      this.set(item , item );
    });

    let finalArray =[];

    this.map.forEach(item =>{

      let array = [];
      let current =  item.head;
      if(current.next){
        while (current !== null){
          array.push(Object.keys(current.value)[0] );
          current = current.next;
        }

        const toFindDuplicates = array => array.filter((item, index) => array.indexOf(item) !== index);
        const duplicateElementa = toFindDuplicates(array);
        if(duplicateElementa.length > 0 ){
          for (let i = 0 ; i<duplicateElementa.length ; i++){
            finalArray.push( duplicateElementa[i]);}
        }

      }
    });

    console.log(this.map);
    return finalArray;
  }

}

module.exports = HashMap;
