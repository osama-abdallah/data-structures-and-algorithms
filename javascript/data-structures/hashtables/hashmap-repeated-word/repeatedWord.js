const HashMap = require('./hash');


function repeatedWord(string){
  let newArr = string.split(' ');
  let result = '';
  let hash = new HashMap(10);
  for (let i = 0 ; i<newArr.length ; i++) {

    if (!hash.contain(newArr[i])) {
      hash.set(newArr[i],1);
    }else{
      result = newArr[i];
      break;
    }

  }
  return result;
}

module.exports = repeatedWord;
