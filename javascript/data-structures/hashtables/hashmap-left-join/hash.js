'use strict';

const LinkedList = require('./linkedList');


class HashMap{
  constructor(size){
    this.size = size,
    this.map = new Array(size);
  }




  getHash (key){
    const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size; // 0-10, 0-1024
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
    if(!this.map[hash]){
      return null;
    }else{
      return this.map[hash].contain(key);}
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
      //  console.log(this.map[9]);
      let current =   this.map[hash].head;
      // console.log(current);
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

}

module.exports = HashMap;
