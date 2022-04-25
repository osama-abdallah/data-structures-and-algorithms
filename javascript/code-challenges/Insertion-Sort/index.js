function InsertionSort(array){

  const n = array.length;

  for (let i = 0 ; i <array.length ; i++){

    let min = i ;

    for (let j = i+1 ; j< n ; j++){

      if(array[j]< array[min]){
        min = j;
      }


    }

    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;

  }
  return array;

}

module.exports=InsertionSort;
