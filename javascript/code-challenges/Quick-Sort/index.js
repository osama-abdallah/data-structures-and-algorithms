'use strict';


function quick_Sort(array) {
  if (array.length <= 1) {
    return array;
  } else {

    let left = [];
    let right = [];
    let newArray = [];
    let pivot = array.pop();
    let length = array.length;

    for (let i = 0; i < length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

let myArray = [8,4,23,42,16,15];


console.log( quick_Sort(myArray));

module.exports=quick_Sort;
