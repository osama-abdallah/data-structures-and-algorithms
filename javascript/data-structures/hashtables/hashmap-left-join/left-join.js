'use strict';


function leftJoin(hashMap1 ,hashMap2 ){


  let newArr =  hashMap1.map.map(item1 =>{

    return Object.entries (item1.head.value) [0];

  });


  let newArr2 = newArr.map(item=>{
    if (hashMap2.get(item[0]) === null){
      return hashMap2.get(item[0]);
    }else{
      return Object.values(hashMap2.get(item[0]))[0];
    }


  });


  for (let i = 0 ;i<newArr.length ; i++){
    if(newArr[i]){
      newArr[i].push(newArr2[i]);
    }}


  return newArr;
}

module.exports = leftJoin;
